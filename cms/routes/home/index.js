const express = require('express');
const router = express.Router();



router.get('/', function (req, res) {
    res.render("home.hbs", {title: "ADMIN", layout: "layouts/home"});
});

router.get('/about', function (req, res) {
    res.render("about.hbs", {title: "ADMIN", layout: "layouts/home"});
});

router.get('/login', function (req, res) {
    res.render("login.hbs", {title: "ADMIN", layout: "layouts/home"});
});

router.get('/register', function (req, res) {
    res.render("register.hbs", {title: "ADMIN", layout: "layouts/home"});
});

module.exports = router;