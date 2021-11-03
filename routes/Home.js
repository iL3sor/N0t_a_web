var express = require('express');
var router = express.Router();
const home = require('../controller/home.js');
const Yours= require('../controller/Yours.js');
const Note= require('../controller/Note.js');
const write = require('../controller/write.js');

router.get('/login.hbs', home.login);
router.post('/login.hbs', home.login2);
router.get('/music', home.music);
router.get('/Yours.html', Yours.main);
router.get('/client.html', Yours.client);
router.get('/Note.html', Note.main);
router.get('/Home.html', home.main);
router.get('/write.hbs', write.main);
router.post('/post.hbs', home.posting);
router.get('/delete.hbs/:id',home.deleteIt);
router.get('/' ,home.main);
module.exports = router;