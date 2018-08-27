const express = require("express");
const router = express.Router();
const qadeerr = require("../../models/qadeer");
const bcrypt = require("bcrypt");
const { adminAuthenticated } = require("../../helpers/authentication");

router.delete("/del/:id", adminAuthenticated, (req, res) => {
  qadeerr.remove({ _id: req.params.id }).then(post => {
    req.flash("delete_message", "post successfully deleted");
    res.redirect("/qadeerrec");
  });
});

router.get("/edit/:id", adminAuthenticated, (req, res) => {
  qadeerr.findOne({ _id: req.params.id }).then(pos => {
    res.render("home/qadeeredit", { pos: pos });
  });
  // res.send("working");
});

router.put("/edit/:id", (req, res) => {
  qadeerr.findOne({ _id: req.params.id }).then(pos => {
    pos.a = req.body.a;
    pos.b = req.body.b;
    pos.c = req.body.c;
    pos.d = req.body.d;
    pos.e = req.body.e;
    pos.f = req.body.f;
    pos.g = req.body.g;
    pos.h = req.body.h;
    pos.i = req.body.i;
    pos.j = req.body.j;
    pos.k = req.body.k;
    pos.l = req.body.l;
    pos.m = req.body.m;
    pos.n = req.body.n;
    pos.o = req.body.o;
    pos.p = req.body.p;
    pos.q = req.body.q;
    pos.r = req.body.r;
    pos.ppp = req.body.ppp;
    pos.htp = req.body.htp;
    pos.http = req.body.http;
    pos.v = req.body.v;
    pos.w = req.body.w;
    pos.x = req.body.x;
    pos.y = req.body.y;
    pos.z = req.body.z;
    pos.aa = req.body.aa;
    pos.bb = req.body.bb;
    pos.cc = req.body.cc;
    pos.dd = req.body.dd;

    pos.save().then(saved => {
      req.flash("edit_message", "post successfully updated");
      res.redirect("/qadeerrec");
    });
  });

  // res.send("working");
});

router.get("/qadeerrec", adminAuthenticated, (req, res) => {
  qadeerr.find({}).then(rec => {
    res.render("home/qadeerrecord", { rec: rec });
  });
});

router.get("/qadeer", adminAuthenticated, (req, res) => {
  res.render("home/qadeer");
});

router.post("/qadeer", adminAuthenticated, (req, res) => {
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
    res.render("home/qadeer.handlebars", {
      errors: errors
    });
  } else {
    const newqadeer = new qadeerr({
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

    newqadeer
      .save()
      .then(savedpost => {
        console.log("successfully data saved");
        res.redirect("/qadeerrec");
      })
      .catch(err => {
        return err;
      });
  }
});

module.exports = router;
