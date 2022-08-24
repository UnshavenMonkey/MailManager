const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const mailRouter = require('./mailRouter');

router.use('/user', userRouter);
router.use('/mail', mailRouter);

module.exports = router;
