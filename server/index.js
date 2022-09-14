require('dotenv').config()
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('sequelstore-connect')(session);
const sequelize = require('./db');
const cors = require('cors');
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');


const PORT = process.env.PORT || 5000;

const app = express()
app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(session({
    key: "userID",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60
    },
    store: new SequelizeStore({database: sequelize,
        sessionModel: sequelize.ConnectSession})
}));
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
<<<<<<< HEAD
        console.log("Привет это база данных");
=======
        console.log('Connection has been established successfully.');
>>>>>>> 037e328c606152fab7d4ce1273195e1862f5bf08
        await sequelize.sync();
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch(error) {
        console.log(error);
    }
}

start()

