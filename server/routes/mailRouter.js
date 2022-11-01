const Router = require('express');
const router = new Router();
const mailController = require('../controllers/mailController');

router.post('/addmail', mailController.addMail);
router.get('/maillist', mailController.getAllMail);
router.get('/:id');

module.exports = router;
