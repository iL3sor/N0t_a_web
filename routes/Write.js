var express = require('express');
var router = express.Router();
const write= require('../controller/write.js');

router.get('/' ,write.main);
module.exports = router;