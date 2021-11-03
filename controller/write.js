class ctwrite {
    main(req, res,next) {
        var cmp = 'th1s_1s_iL3sor';
        var ck = req.cookies['Dieu'];
        if(cmp==ck)
        {
          res.render('write')
        }
        else
        {
          res.render('login')
        }
    }
  }
module.exports = new ctwrite();