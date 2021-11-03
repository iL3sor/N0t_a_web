//  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
const express = require("express");
const morgan = require("morgan");
const handlebar = require("express-handlebars");
const path = require("path");
const db = require("./config/db/index.js");//
const cookieParser = require("cookie-parser");
const route = require("./routes/index");
const session=require("express-session")
const cookieSession = require('cookie-session')

db.connect();
//**************************************************************
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));


//set cookie*****************************************************
app.use(cookieParser());
app.use(cookieSession({
    maxAge: 8*60*60*1000, //8 hours
    httpOnly: true,
    secure: false,
    secureProxy: true,
    keys: ['Dieu', 'th1s_1s_iL3sor']
  }));
//*****************************************************************
app.set('view engine', 'hbs')
app.engine(
    "hbs",
    handlebar({
      extname: ".hbs",
    })
    );

//***************************************************************** 
morgan("tiny");
route(app);  

//***************************************************************** 
var methodOverride = require("method-override");
app.use(methodOverride("_method"));


//***************************************************************** 
const PORT = process.env.PORT|| 3000;
app.listen(PORT, ()=>
{
    console.log('listening on port '+ PORT);
})