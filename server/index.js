require('dotenv').config()
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
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
const myStore = new SequelizeStore({
    db: sequelize,
})
app.use(session({
    key: "userID",
    secret: "subscribe",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: 1000 * 60 * 60
    },
    store: myStore
}));
myStore.sync();
app.use('/api', router);
app.use(cookieParser());
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
        console.log('===============')
    } catch(error) {
        console.log('это ошибка', error);
    }
}

start()

