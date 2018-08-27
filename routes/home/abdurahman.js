const express = require("express");
const router = express.Router();
const abdur = require("../../models/abdurahman");
const bcrypt = require("bcrypt");
const { adminAuthenticated } = require("../../helpers/authentication");

router.delete("/abdur/del/:id", adminAuthenticated, (req, res) => {
  abdur.remove({ _id: req.params.id }).then(post => {
    req.flash("delete_message", "post successfully deleted");
    res.redirect("/abdurrec");
  });
});

router.get("/abdur/edit/:id", adminAuthenticated, (req, res) => {
  abdur.findOne({ _id: req.params.id }).then(posd => {
    res.render("home/abduredit", { posd: posd });
  });
  // res.send("working");
});

router.put("/abdur/edit/:id", (req, res) => {
  abdur.findOne({ _id: req.params.id }).then(posd => {
    posd.a = req.body.a;
    posd.b = req.body.b;
    posd.c = req.body.c;
    posd.d = req.body.d;
    posd.e = req.body.e;
    posd.f = req.body.f;
    posd.g = req.body.g;
    posd.h = req.body.h;
    posd.i = req.body.i;
    posd.j = req.body.j;
    posd.k = req.body.k;
    posd.l = req.body.l;
    posd.m = req.body.m;
    posd.n = req.body.n;
    posd.o = req.body.o;
    posd.p = req.body.p;
    posd.q = req.body.q;
    posd.r = req.body.r;
    posd.ppp = req.body.ppp;
    posd.htp = req.body.htp;
    posd.http = req.body.http;
    posd.v = req.body.v;
    posd.w = req.body.w;
    posd.x = req.body.x;
    posd.y = req.body.y;
    posd.z = req.body.z;
    posd.aa = req.body.aa;
    posd.bb = req.body.bb;
    posd.cc = req.body.cc;
    posd.dd = req.body.dd;

    posd.save().then(saved => {
      req.flash("edit_message", "post successfully updated");
      res.redirect("/abdurrec");
    });
  });

  // res.send("working");
});

router.get("/abdurrec", adminAuthenticated, (req, res) => {
  abdur.find({}).then(r => {
    res.render("home/abdurrecord", { r: r });
  });
});

router.get("/abdur", adminAuthenticated, (req, res) => {
  res.render("home/abdur");
});

router.post("/abdur", adminAuthenticated, (req, res) => {
  let errors = [];
  if (!req.body.a) {
    errors.push({ message: "plz enter monday day" });
  }

  if (!req.body.m) {
    errors.push({ message: "plz enter tuesday day" });
  }
  if (!req.body.p) {
    errors.push({ message: "plz enter wednesday  day" });
  }
  if (!req.body.ppp) {
    errors.push({ message: "plz enter thursday  day" });
  }

  if (!req.body.v) {
    errors.push({ message: "plz enter friday  day" });
  }

  if (!req.body.y) {
    errors.push({ message: "plz enter saturday  day" });
  }
  if (!req.body.bb) {
    errors.push({ message: "plz enter sunday  day" });
  }

  if (!req.body.b) {
    errors.push({ message: "plz enter monday working hour" });
  }

  if (!req.body.n) {
    errors.push({ message: "plz enter tuesday working hour" });
  }
  if (!req.body.q) {
    errors.push({ message: "plz enter wednesday working hour" });
  }
  if (!req.body.htp) {
    errors.push({ message: "plz enter thursday working hour" });
  }

  if (!req.body.w) {
    errors.push({ message: "plz enter friday working hour" });
  }

  if (!req.body.z) {
    errors.push({ message: "plz enter saturday working hour" });
  }
  if (!req.body.cc) {
    errors.push({ message: "plz enter sunday working hour" });
  }

  if (!req.body.c) {
    errors.push({ message: "plz enter monday date" });
  }

  if (!req.body.o) {
    errors.push({ message: "plz enter tuesday date" });
  }
  if (!req.body.r) {
    errors.push({ message: "plz enter wednesday date" });
  }
  if (!req.body.http) {
    errors.push({ message: "plz enter thursday date" });
  }

  if (!req.body.x) {
    errors.push({ message: "plz enter friday date" });
  }

  if (!req.body.aa) {
    errors.push({ message: "plz enter saturday date" });
  }
  if (!req.body.dd) {
    errors.push({ message: "plz enter sunday date" });
  }

  if (!req.body.d) {
    errors.push({ message: "plz enter total day" });
  }
  if (!req.body.e) {
    errors.push({ message: "plz enter labour pay" });
  }

  if (!req.body.k) {
    errors.push({ message: "plz enter kharcha" });
  }

  if (errors.length > 0) {
    res.render("home/abdurahman.handlebars", {
      errors: errors
    });
  } else {
    const newabdur = new abdur({
      a: req.body.a,
      b: req.body.b,
      c: req.body.c,
      d: req.body.d,
      e: req.body.e,
      f: req.body.f,
      g: req.body.g,
      h: req.body.h,
      i: req.body.i,
      j: req.body.j,

      k: req.body.k,
      l: req.body.l,
      m: req.body.m,
      n: req.body.n,
      o: req.body.o,
      p: req.body.p,
      q: req.body.q,
      r: req.body.r,
      ppp: req.body.ppp,
      htp: req.body.htp,
      http: req.body.http,
      v: req.body.v,
      w: req.body.w,
      x: req.body.x,
      y: req.body.y,
      z: req.body.z,
      aa: req.body.aa,
      bb: req.body.bb,
      cc: req.body.cc,
      dd: req.body.dd
    });

    newabdur
      .save()
      .then(savedpost => {
        console.log("successfully data saved");
        res.redirect("/abdurrec");
      })
      .catch(err => {
        return err;
      });
  }
});

module.exports = router;
