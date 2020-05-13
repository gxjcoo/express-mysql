const express = require('express');
const router = express.Router();
const controller = require('../controller')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send({ title: 'Express' });
// });
router.get('/list', controller.vedioInfo.getList);
module.exports = router;
