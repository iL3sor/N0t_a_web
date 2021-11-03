const home = require('./Home');
const Yours = require('./Yours')
const Note = require('./Note')
const Write = require('./Write')

/******************* ****************/
function route(app) {
    app.use('/Home.html',home);
    app.use('/Yours.html',Yours);
    app.use('/Note.html',Note);
    app.use('/write.hbs',Write);
    app.use('/',home);
};

module.exports= route;