const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const {User} = require('../models/models');

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
        const s = req.session
        s.email = user.email
        console.log(s)
        return res.json({user})
    }

    async check(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('Не задан id'))
        }
        res.json(id);
    }

    async getUsers(req, res) {
        const users = await User.findAll()
        return res.json(users);
    }
}

module.exports = new UserController();