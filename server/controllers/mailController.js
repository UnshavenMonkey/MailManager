const sequelize = require('../db');
const {Mail, User} = require('../models/models');
const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const {DataTypes} = require("sequelize");


class MailController {
    async getAllMail(req, res, next) {
       const maillist = await Mail.findAll();
        if (!maillist) {
            return next(ApiError.internal('Пользователь с таким именем не найден'));
        }

        return res.json({maillist});
    }
    async addMail(req, res, next) {
        const {dateToComplete, dateComplete, author, address, file, responsiblePerson, isPerson} = req.body
        console.log(req.body);
        const mail = await Mail.create({dateToComplete, dateComplete, author, address, file, responsiblePerson, isPerson });
        return res.json({mail});
    }
}

module.exports = new MailController();