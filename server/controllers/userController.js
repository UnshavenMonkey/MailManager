const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const {User } = require('../models/models');
const sequelize = require('../db');

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest("Некорректный email или password"))
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest("Пользователь с таким email уже существует"))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword});
        return res.json({user});
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal('Пользователь с таким именем не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }

        return res.json({user})
    }

    async check(req, res, next) {
        const sid = req.sessionID;
        const session = await sequelize.models.Session.findOne({where: {sid: sid}});
        if (!session) {
            return res.json({isAuth: !!session});
        }

        return res.json({isAuth: !!session})
    }

    async logout(req, res, next) {
        const sid = req.sessionID;
        await sequelize.models.Session.destroy({where: {sid: sid}});

        return res.json({message: 'Выход осуществлен'})
    }

}

module.exports = new UserController();