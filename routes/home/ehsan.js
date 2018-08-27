const express = require("express");
const router = express.Router();
const ehsann = require("../../models/ehsan");
const bcrypt = require("bcrypt");
const { adminAuthenticated } = require("../../helpers/authentication");

router.delete("/ehsan/del/:id", adminAuthenticated, (req, res) => {
  ehsann.remove({ _id: req.params.id }).then(post => {
    req.flash("delete_message", "post successfully deleted");
    res.redirect("/ehsanrec");
  });
});

router.get("/ehsan/edit/:id", adminAuthenticated, (req, res) => {
  ehsann.findOne({ _id: req.params.id }).then(eh => {
    res.render("home/ehsanedit", { eh: eh });
  });
  // res.send("working");
});

router.put("/ehsan/edit/:id", (req, res) => {
  ehsann.findOne({ _id: req.params.id }).then(eh => {
    eh.a = req.body.a;
    eh.b = req.body.b;
    eh.c = req.body.c;
    eh.d = req.body.d;
    eh.e = req.body.e;
    eh.f = req.body.f;
    eh.g = req.body.g;
    eh.h = req.body.h;
    eh.i = req.body.i;
    eh.j = req.body.j;
    eh.k = req.body.k;
    eh.l = req.body.l;
    eh.m = req.body.m;
    eh.n = req.body.n;
    eh.o = req.body.o;
    eh.p = req.body.p;
    eh.q = req.body.q;
    eh.r = req.body.r;
    eh.ppp = req.body.ppp;
    eh.htp = req.body.htp;
    eh.http = req.body.http;
    eh.v = req.body.v;
    eh.w = req.body.w;
    eh.x = req.body.x;
    eh.y = req.body.y;
    eh.z = req.body.z;
    eh.aa = req.body.aa;
    eh.bb = req.body.bb;
    eh.cc = req.body.cc;
    eh.dd = req.body.dd;

    eh.save().then(saved => {
      req.flash("edit_message", "post successfully updated");
      res.redirect("/ehsanrec");
    });
  });

  // res.send("working");
});

router.get("/ehsanrec", adminAuthenticated, (req, res) => {
  ehsann.find({}).then(rec => {
    res.render("home/ehsanrecord", { rec: rec });
  });
});

router.get("/ehsan", adminAuthenticated, (req, res) => {
  res.render("home/ehsan");
});

router.post("/ehsan", adminAuthenticated, (req, res) => {
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
    res.render("home/ehsan.handlebars", {
      errors: errors
    });
  } else {
    const newqadeer = new ehsann({
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
        res.redirect("/ehsanrec");
      })
      .catch(err => {
        return err;
      });
  }
});

module.exports = router;
