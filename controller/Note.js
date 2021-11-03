const db = require("../model/database.js")
class ctNote {
    main(req, res,next) {
        res.render('Note')
    }
  }
module.exports = new ctNote();