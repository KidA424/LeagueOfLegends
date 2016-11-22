/////////////////////////////////////
//////// Partials API Router ////////
/////////////////////////////////////

//  partials/api/ ...

var express = require('express');
var router = express.Router();

router.get('/champions', function(req, res, next) {
    res.render('partials/api/champions');
});

module.exports = router;
