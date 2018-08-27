const express = require("express");
const router = express.Router();
const talhaa = require("../../models/talha");
const bcrypt = require("bcrypt");
const { adminAuthenticated } = require("../../helpers/authentication");

router.delete("/talha/del/:id", adminAuthenticated, (req, res) => {
  talhaa.remove({ _id: req.params.id }).then(post => {
    req.flash("delete_message", "post successfully deleted");
    res.redirect("/talharec");
  });
});

router.get("/talha/edit/:id", adminAuthenticated, (req, res) => {
  talhaa.findOne({ _id: req.params.id }).then(tall => {
    res.render("home/talhaedit", { tall: tall });
  });
  // res.send("working");
});

router.put("/talha/edit/:id", (req, res) => {
  talhaa.findOne({ _id: req.params.id }).then(tall => {
    tall.a = req.body.a;
    tall.b = req.body.b;
    tall.c = req.body.c;
    tall.d = req.body.d;
    tall.e = req.body.e;
    tall.f = req.body.f;
    tall.g = req.body.g;
    tall.h = req.body.h;
    tall.i = req.body.i;
    tall.j = req.body.j;
    tall.k = req.body.k;
    tall.l = req.body.l;
    tall.m = req.body.m;
    tall.n = req.body.n;
    tall.o = req.body.o;
    tall.p = req.body.p;
    tall.q = req.body.q;
    tall.r = req.body.r;
    tall.ppp = req.body.ppp;
    tall.htp = req.body.htp;
    tall.http = req.body.http;
    tall.v = req.body.v;
    tall.w = req.body.w;
    tall.x = req.body.x;
    tall.y = req.body.y;
    tall.z = req.body.z;
    tall.aa = req.body.aa;
    tall.bb = req.body.bb;
    tall.cc = req.body.cc;
    tall.dd = req.body.dd;

    tall.save().then(saved => {
      req.flash("edit_message", "post successfully updated");
      res.redirect("/talharec");
    });
  });

  // res.send("working");
});

router.get("/talharec", adminAuthenticated, (req, res) => {
  talhaa.find({}).then(tal => {
    res.render("home/talharecord", { tal: tal });
  });
});

router.get("/talha", adminAuthenticated, (req, res) => {
  res.render("home/talha");
});

router.post("/talha", adminAuthenticated, (req, res) => {
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
    res.render("home/talha.handlebars", {
      errors: errors
    });
  } else {
    const newtalha = new talhaa({
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

    newtalha
      .save()
      .then(savedpost => {
        console.log("successfully data saved");
        res.redirect("/talharec");
      })
      .catch(err => {
        return err;
      });
  }
});

module.exports = router;
