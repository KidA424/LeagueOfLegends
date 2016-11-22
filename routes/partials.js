/////////////////////////////////
//////// Partials Router ////////
/////////////////////////////////

//  partials/ ...

var express = require('express');
var router = express.Router();

var api = require('../routes/partials/api');

router.get(['/', '/index'], function(req, res, next) {
    res.render('partials/index');
});

router.get('/:folder/:page', function(req, res, next) {
    res.render('partials/' + req.params.folder + '/' + req.params.page);
});

module.exports = router;
