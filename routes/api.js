/////////////////////////////
//////// API Router /////////
/////////////////////////////

var express = require('express');
var router = express.Router();

var championModel = require('../model/riotApi.js');

/* GET home page. */
router.get('/champions', function(req, res, next) {
    championModel.getAllChampions(function(champions) {
        res.json(champions);
    });
});

router.get('/champions/:champName', function(req, res, next) {
    championModel.getChampion(req.params.champName, function(champion) {
        res.json(champion);
    });
});

router.get('/champions/images/:champName', function(req, res, next) {
    championModel.getChampionImageUrl(req.params.champName, function(imageUrl) {
        res.send(imageUrl);
    });
});

module.exports = router;
