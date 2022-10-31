const sequelize = require('../db');
const {Mail} = require('../models/models');
const ApiError = require("../error/ApiError");


class MailController {
    async getAllMail(req, res, next) {
        try {
            const mailList = await Mail.findAll();
        } catch (e) {
            console.log('ошибка', e)
        }
        // console.log(mailList)

        return res.json({'q': 1});
    }
}

module.exports = new MailController();