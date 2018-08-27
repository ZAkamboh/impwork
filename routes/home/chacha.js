const express = require("express");
const router = express.Router();
const chachaa = require("../../models/chacha");
const bcrypt = require("bcrypt");
const { adminAuthenticated } = require("../../helpers/authentication");

router.delete("/chacha/delete/:id", adminAuthenticated, (req, res) => {
  chachaa.remove({ _id: req.params.id }).then(posttt => {
    req.flash("delete_messageshafiq", "post successfully deleted");
    res.redirect("/chacharec");
  });
});

router.get("/chacha/edit/:id", adminAuthenticated, (req, res) => {
  chachaa.findOne({ _id: req.params.id }).then(cha => {
    res.render("home/chachaedit", { cha: cha });
  });
  // res.send("working");
});

router.put("/chacha/edit/:id", (req, res) => {
  chachaa.findOne({ _id: req.params.id }).then(ch => {
    ch.aa = req.body.aa;
    ch.potaf7 = req.body.taf7;
    ch.quan1 = req.body.quan1;
    ch.total1 = req.body.total1;
    ch.GT = req.body.GT;
    ch.k = req.body.k;
    ch.pree = req.body.pree;
    ch.body2 = req.body.body2;
    ch.taf1 = req.body.taf1;
    ch.quan2 = req.body.quan2;
    ch.total2 = req.body.total2;
    ch.body3 = req.body.body3;
    ch.taf2 = req.body.taf2;
    ch.quan3 = req.body.quan3;
    ch.total3 = req.body.total3;
    ch.body4 = req.body.body4;
    ch.taf3 = req.body.taf3;
    ch.quan4 = req.body.quan4;
    ch.total4 = req.body.total4;
    ch.body5 = req.body.body5;
    ch.taf4 = req.body.taf4;
    ch.quan5 = req.body.quan5;
    ch.total5 = req.body.total5;
    ch.body6 = req.body.body6;
    ch.taf5 = req.body.taf5;
    ch.quan6 = req.body.quan6;
    ch.total6 = req.body.total6;
    ch.body7 = req.body.body7;
    ch.taf6 = req.body.taf6;
    ch.quan7 = req.body.quan7;
    ch.total7 = req.body.total7;
    ch.save().then(saved => {
      req.flash("edit_messageshafiq", "post successfully updated");
      res.redirect("/chacharec");
    });
  });

  // res.send("working");
});

router.get("/chacha", adminAuthenticated, (req, res) => {
  res.render("home/chacha");
});

router.post("/chacha", adminAuthenticated, (req, res) => {
  console.log(req.body);

  const newchacha = new chachaa({
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

  newchacha.save().then(savedPost => {
    req.flash(
      "success_message",
      `posts ${savedPost.name} was created successfully`
    );
    console.log("successfully data saved");
    res.redirect("/chacharec");
  });
});

router.get("/chacharec", adminAuthenticated, (req, res) => {
  console.log(req.user);
  chachaa
    .find({})
    .then(post => {
      res.render("home/chacharecord", { post: post });
    })
    .catch(err => {
      if (err) return err;
    });
});

module.exports = router;
