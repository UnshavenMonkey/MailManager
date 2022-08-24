const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    firstname: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
});

const Citizen = sequelize.define('citizen', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.INTEGER},
    street: {type: DataTypes.STRING},
    build: {type: DataTypes.STRING},
    apartment: {type: DataTypes.INTEGER},
    firstname: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
})

const Mail = sequelize.define('mail', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    dateToComplete: {type: DataTypes.DATE},
    dateComplete: {type: DataTypes.DATE},
    author: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    file: {type: DataTypes.STRING},
    responsiblePerson: {type: DataTypes.STRING},
})

Citizen.hasMany(Mail);
Mail.belongsTo(Citizen);

module.exports = {
    User, Citizen, Mail
}