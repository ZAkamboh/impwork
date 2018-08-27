const express = require("express");
const router = express.Router();
const shahzadd = require("../../models/shahzad");
const bcrypt = require("bcrypt");
const { adminAuthenticated } = require("../../helpers/authentication");

router.delete("/shahzad/delete/:id", adminAuthenticated, (req, res) => {
  shahzadd.remove({ _id: req.params.id }).then(posttt => {
    req.flash("delete_messageshafiq", "post successfully deleted");
    res.redirect("/shahzadrec");
  });
});

router.get("/shahzad/edit/:id", adminAuthenticated, (req, res) => {
  shahzadd.findOne({ _id: req.params.id }).then(sh => {
    res.render("home/shahzadedit", { sh: sh });
  });
  // res.send("working");
});

router.put("/shahzad/edit/:id", (req, res) => {
  shahzadd.findOne({ _id: req.params.id }).then(sh => {
    sh.aa = req.body.aa;
    sh.potaf7 = req.body.taf7;
    sh.quan1 = req.body.quan1;
    sh.total1 = req.body.total1;
    sh.GT = req.body.GT;
    sh.k = req.body.k;
    sh.pree = req.body.pree;
    sh.body2 = req.body.body2;
    sh.taf1 = req.body.taf1;
    sh.quan2 = req.body.quan2;
    sh.total2 = req.body.total2;
    sh.body3 = req.body.body3;
    sh.taf2 = req.body.taf2;
    sh.quan3 = req.body.quan3;
    sh.total3 = req.body.total3;
    sh.body4 = req.body.body4;
    sh.taf3 = req.body.taf3;
    sh.quan4 = req.body.quan4;
    sh.total4 = req.body.total4;
    sh.body5 = req.body.body5;
    sh.taf4 = req.body.taf4;
    sh.quan5 = req.body.quan5;
    sh.total5 = req.body.total5;
    sh.body6 = req.body.body6;
    sh.taf5 = req.body.taf5;
    sh.quan6 = req.body.quan6;
    sh.total6 = req.body.total6;
    sh.body7 = req.body.body7;
    sh.taf6 = req.body.taf6;
    sh.quan7 = req.body.quan7;
    sh.total7 = req.body.total7;
    sh.save().then(saved => {
      req.flash("edit_messageshafiq", "post successfully updated");
      res.redirect("/shahzadrec");
    });
  });

  // res.send("working");
});

router.get("/shahzad", adminAuthenticated, (req, res) => {
  res.render("home/shahzad");
});

router.post("/shahzad", adminAuthenticated, (req, res) => {
  console.log(req.body);

  const newshahzad = new shahzadd({
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

  newshahzad.save().then(savedPost => {
    req.flash(
      "success_message",
      `posts ${savedPost.name} was created successfully`
    );
    console.log("successfully data saved");
    res.redirect("/shahzadrec");
  });
});

router.get("/shahzadrec", adminAuthenticated, (req, res) => {
  console.log(req.user);
  shahzadd
    .find({})
    .then(post => {
      res.render("home/shahzadrecord", { post: post });
    })
    .catch(err => {
      if (err) return err;
    });
});

module.exports = router;
