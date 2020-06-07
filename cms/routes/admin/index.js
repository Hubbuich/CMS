const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render("admin.hbs", {title: "ADMIN", layout: "layouts/admin"});
});

router.get('/dashboard', function (req, res) {
    res.render("dashboard.hbs", {title: "ADMIN-DASHBOARD", layout: "layouts/admin"});
});


module.exports = router;