var express = require('express');
var router = express.Router();
const Yours= require('../controller/Yours.js');

router.get('/' ,Yours.main);
module.exports = router;