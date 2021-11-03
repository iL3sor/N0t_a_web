const db = require("../model/database.js")
const cookieParser = require("cookie-parser");
class cthome {
    main(req, res,next) {
      var url = "https://www.youtube.com/watch?v=kOCkne-Bku4";
      let re =
        /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
      let id = url.match(re)[7] || gdGCtzN6_YY;
      res.render("home", { id });
    }
    music(req, res) {
      var url = req.query.finding;
      let re =
        /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
      let id = url.match(re)[7] || gdGCtzN6_YY;
      res.render("home", { id });
    }
    posting(req,res,next)
    {
      var data = new db(req.body);
      data.save()
        .then( () => res.redirect('Yours.html'))
        .catch(next) 
    }
    deleteIt(req,res,next){
      db.deleteOne({_id: req.params.id})
      .then(()=> res.redirect('/'))
      .catch(next)
    }
    login(req,res){
      res.render("login")
    }
    login2(req,res,next){
      var user = req.body.user;
      var pass = req.body.pass;
      if(user === "adm1n" && pass == "psswd")
      {
          if (1) {
            res.cookie("Dieu", "th1s_1s_iL3sor");
          }
          res.redirect('/')
      }
      else
      {
        res.render('delete')
      }
    }
  }
module.exports = new cthome();