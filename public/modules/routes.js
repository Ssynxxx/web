const express = require('express');
const router = express.Router();
const isAuth = require('./api/v1/middlewares/isAuth');
const auth = require('./api/v1/routes/auth');


router.use(express.urlencoded({ extended: true }));

router.use(express.json());

const mongoose = require('mongoose');

router.get('/', function (req, res) {
    res.render('pages/public');
});

router.get('/protected', isAuth, function (req, res) {
    res.render('pages/index');
});

router.get('/findjob', function (req, res) {
    res.render('pages/findjobs');
});

router.get('/profile', function (req, res) {
    res.render('pages/profile');
});

router.get('/findfreelancer', function (req, res) {
    res.render('pages/findfreelancers');
});

router.get('/about', function (req, res) {
    res.render('pages/about');
});

router.get('/logins', function (req, res) {
    res.render('pages/loginpage');
});

router.get('/categorys/3dmodelling', function (req, res) {
    res.render('pages/category/3dmodelling');
});

router.get('/categorys/fab', function (req, res) {
    res.render('pages/category/fab');
});

router.get('/categorys/graphicdesgin', function (req, res) {
    res.render('pages/category/graphicdesgin');
});

router.get('/categorys/illustrator', function (req, res) {
    res.render('pages/category/illustrator');
});

router.get('/categorys/logodesign', function (req, res) {
    res.render('pages/category/logodesign');
});

router.get('/categorys/mobiledesign', function (req, res) {
    res.render('pages/category/mobiledesign');
});

router.get('/categorys/packagedesign', function (req, res) {
    res.render('pages/category/packagedesign');
});

router.get('/categorys/webdesign', function (req, res) {
    res.render('pages/category/webdesign');
});

router.get('/categorys/wordpress', function (req, res) {
    res.render('pages/category/wordpress');
});

module.exports = router;