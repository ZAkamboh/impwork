const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodoverride = require("method-override");
const fileupload = require("express-fileupload");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const { mongoDb } = require("./config/database");

// mongoose
//   .connect("mongodb://localhost/postwdata")
//   .then(() => {
//     console.log("database successfully connected");
//   })
//   .catch(err => {
//     if (err) return err;
//     //console.log('database not connected');
//   });

if (mongoose.connect("mongodb://zubair:123@ds227110.mlab.com:27110/cms")) {
  mongodb: console.log("connected");
} else {
  console.log("not connected");
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodoverride("_method"));
app.use(fileupload());
app.use(flash());
app.use(
  session({
    secret: "zubairkamboh",
    resave: true,
    saveUninitialized: true
  })
);
app.use((req, res, next) => {
  res.locals.regist = req.regist || null;
  //console.log(res.locals.regist=req.regist);
  res.locals.edit_message = req.flash("edit_message");
  //res.locals.error_message = req.flash("error_message");
  res.locals.delete_message = req.flash("delete_message");
  res.locals.delete_messageshafiq = req.flash("delete_messageshafiq");
  res.locals.edit_messageshafiq = req.flash("edit_messageshafiq");
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.get("/userlogin", (req, res) => {
  res.render("userlogin.handlebars");
  //res.send('userlogin working');
});

app.engine("handlebars", exphbs({ defaultLayout: "home" }));
app.set("view engine", "handlebars");

const home = require("./routes/home/index");
const shafiq = require("./routes/home/shafiq");
const tariq = require("./routes/home/tariq");
const shahzad = require("./routes/home/shahzad");
const chacha = require("./routes/home/chacha");
const qadeer = require("./routes/home/qadeer");
const abdur = require("./routes/home/abdurahman");
const ehsan = require("./routes/home/ehsan");
const talha = require("./routes/home/talha");
const users = require("./routes/userlogin/userslogin");
app.use("/", home);
app.use("/", shafiq);
app.use("/", tariq);
app.use("/", shahzad);
app.use("/", chacha);
app.use("/", qadeer);
app.use("/", abdur);
app.use("/", ehsan);
app.use("/", talha);
app.use("/", users);

const port = 8888;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
