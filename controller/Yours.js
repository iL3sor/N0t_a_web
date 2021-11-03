const db = require("../model/database.js")
class ctyours {
  main(req, res,next) {
    var cmp = 'th1s_1s_iL3sor';
    var ck = req.cookies['Dieu'];
    if(cmp==ck)
    {
      db.find({}).lean()
      .then((resu) => res.render('Yours',{resu}))
      .catch(next);
    }
    else
    {
      res.render('login')
    }
}
  client(req, res, next)   {
    db.find({}).lean()
      .then((resu) => res.render('client',{resu}))
      .catch(next);
  }
}
module.exports = new ctyours();
