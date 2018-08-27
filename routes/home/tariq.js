const express = require("express");
const router = express.Router();
const tariqq = require("../../models/tariq");
const bcrypt = require("bcrypt");
const { adminAuthenticated } = require("../../helpers/authentication");

router.delete("/tariq/delete/:id", adminAuthenticated, (req, res) => {
  tariqq.remove({ _id: req.params.id }).then(posttt => {
    req.flash("delete_messageshafiq", "post successfully deleted");
    res.redirect("/tariqrec");
  });
});

router.get("/tariq/edit/:id", adminAuthenticated, (req, res) => {
  tariqq.findOne({ _id: req.params.id }).then(pp => {
    res.render("home/tariqedit", { pp: pp });
  });
  // res.send("working");
});

router.put("/tariq/edit/:id", (req, res) => {
  tariqq.findOne({ _id: req.params.id }).then(pp => {
    pp.aa = req.body.aa;
    pp.potaf7 = req.body.taf7;
    pp.quan1 = req.body.quan1;
    pp.total1 = req.body.total1;
    pp.GT = req.body.GT;
    pp.k = req.body.k;
    pp.pree = req.body.pree;
    pp.body2 = req.body.body2;
    pp.taf1 = req.body.taf1;
    pp.quan2 = req.body.quan2;
    pp.total2 = req.body.total2;
    pp.body3 = req.body.body3;
    pp.taf2 = req.body.taf2;
    pp.quan3 = req.body.quan3;
    pp.total3 = req.body.total3;
    pp.body4 = req.body.body4;
    pp.taf3 = req.body.taf3;
    pp.quan4 = req.body.quan4;
    pp.total4 = req.body.total4;
    pp.body5 = req.body.body5;
    pp.taf4 = req.body.taf4;
    pp.quan5 = req.body.quan5;
    pp.total5 = req.body.total5;
    pp.body6 = req.body.body6;
    pp.taf5 = req.body.taf5;
    pp.quan6 = req.body.quan6;
    pp.total6 = req.body.total6;
    pp.body7 = req.body.body7;
    pp.taf6 = req.body.taf6;
    pp.quan7 = req.body.quan7;
    pp.total7 = req.body.total7;
    pp.save().then(saved => {
      req.flash("edit_messageshafiq", "post successfully updated");
      res.redirect("/tariqrec");
    });
  });

  // res.send("working");
});

router.get("/tariq", adminAuthenticated, (req, res) => {
  res.render("home/tariq");
});

router.post("/tariq", adminAuthenticated, (req, res) => {
  console.log(req.body);

  const newtariq = new tariqq({
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

  newtariq.save().then(savedPost => {
    req.flash(
      "success_message",
      `posts ${savedPost.name} was created successfully`
    );
    console.log("successfully data saved");
    res.redirect("/tariqrec");
  });
});

router.get("/tariqrec", adminAuthenticated, (req, res) => {
  console.log(req.user);
  tariqq
    .find({})
    .then(post => {
      res.render("home/tariqrecord", { post: post });
    })
    .catch(err => {
      if (err) return err;
    });
});

module.exports = router;
