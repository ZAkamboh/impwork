const express = require("express");
const router = express.Router();
const shafiqq = require("../../models/shafiq");
const bcrypt = require("bcrypt");
const { adminAuthenticated } = require("../../helpers/authentication");

router.delete("/shafiq/delete/:id", adminAuthenticated, (req, res) => {
  shafiqq.remove({ _id: req.params.id }).then(posttt => {
    req.flash("delete_messageshafiq", "post successfully deleted");
    res.redirect("/shafiqd");
  });
});

router.get("/shafiq/edit/:id", adminAuthenticated, (req, res) => {
  shafiqq.findOne({ _id: req.params.id }).then(p => {
    res.render("home/shafiqedit", { p: p });
  });
  // res.send("working");
});

router.put("/shafiq/edit/:id", (req, res) => {
  shafiqq.findOne({ _id: req.params.id }).then(p => {
    p.aa = req.body.aa;
    p.potaf7 = req.body.taf7;
    p.quan1 = req.body.quan1;
    p.total1 = req.body.total1;
    p.GT = req.body.GT;
    p.k = req.body.k;
    p.pree = req.body.pree;
    p.body2 = req.body.body2;
    p.taf1 = req.body.taf1;
    p.quan2 = req.body.quan2;
    p.total2 = req.body.total2;
    p.body3 = req.body.body3;
    p.taf2 = req.body.taf2;
    p.quan3 = req.body.quan3;
    p.total3 = req.body.total3;
    p.body4 = req.body.body4;
    p.taf3 = req.body.taf3;
    p.quan4 = req.body.quan4;
    p.total4 = req.body.total4;
    p.body5 = req.body.body5;
    p.taf4 = req.body.taf4;
    p.quan5 = req.body.quan5;
    p.total5 = req.body.total5;
    p.body6 = req.body.body6;
    p.taf5 = req.body.taf5;
    p.quan6 = req.body.quan6;
    p.total6 = req.body.total6;
    p.body7 = req.body.body7;
    p.taf6 = req.body.taf6;
    p.quan7 = req.body.quan7;
    p.total7 = req.body.total7;
    p.save().then(saved => {
      req.flash("edit_messageshafiq", "post successfully updated");
      res.redirect("/shafiqd");
    });
  });

  // res.send("working");
});

router.get("/shafiq", adminAuthenticated, (req, res) => {
  res.render("home/shafiq");
});

router.post("/shafiq", adminAuthenticated, (req, res) => {
  console.log(req.body);

  const newshafiq = new shafiqq({
    aa: req.body.aa,
    taf7: req.body.taf7,
    quan1: req.body.quan1,
    total1: req.body.total1,
    GT: req.body.GT,
    k: req.body.k,
    pree: req.body.pree,
    body2: req.body.body2,
    taf1: req.body.taf1,
    quan2: req.body.quan2,
    total2: req.body.total2,
    body3: req.body.body3,
    taf2: req.body.taf2,
    quan3: req.body.quan3,
    total3: req.body.total3,
    body4: req.body.body4,
    taf3: req.body.taf3,
    quan4: req.body.quan4,
    total4: req.body.total4,
    body5: req.body.body5,
    taf4: req.body.taf4,
    quan5: req.body.quan5,
    total5: req.body.total5,
    body6: req.body.body6,
    taf5: req.body.taf5,
    quan6: req.body.quan6,
    total6: req.body.total6,
    body7: req.body.body7,
    taf6: req.body.taf6,
    quan7: req.body.quan7,
    total7: req.body.total7
  });

  newshafiq.save().then(savedPost => {
    req.flash(
      "success_message",
      `posts ${savedPost.name} was created successfully`
    );
    console.log("successfully data saved");
    res.redirect("/shafiqd");
  });
});

router.get("/shafiqd", adminAuthenticated, (req, res) => {
  console.log(req.user);
  shafiqq
    .find({})
    .then(post => {
      res.render("home/shafiqrecord", { post: post });
    })
    .catch(err => {
      if (err) return err;
    });
});

module.exports = router;
