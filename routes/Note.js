var express = require('express');
var router = express.Router();
const Note= require('../controller/Note.js');

router.get('/' ,Note.main);
module.exports = router;