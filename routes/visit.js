const mongoose = require("mongoose")
const express = require("express")
const siteVews = require("../models/Visit")
var SiteViewsUp = require("./visitUp")

router.get("/", function(req, res, next) {
    SiteViewsUp.siteViewsUp();
    siteViewsUp.findById("").then((data)=> {
        res.render("index", {counter: data.counter});
    },(err) => {next(err)})
    .catch((err) => {next(err)})
});

module.exports = router