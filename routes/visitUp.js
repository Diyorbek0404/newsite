const express = require("express")

const mongoose = require("mongoose")

const siteViews = require("../models/Visit");

siteViewsUp = function () {
    siteViews.findByIdAndUpdate("", {$inc:{counter:1}}, {new:true})
    .then((data) => {console.log(data.counter)})
    .catch((err) => console.log(err))
}

module.exports = {siteViewsUp};