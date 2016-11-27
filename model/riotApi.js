///////////////////////////////
//////// RiotApi Model ////////
///////////////////////////////

var request = require('request');
var staticDataUrl = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/';
var riotApiKey = require('../riotApiKey').riotApiKey;
var imageUrl = '';

request({url: staticDataUrl + 'champion', qs:{api_key: riotApiKey, champData: 'all'}}, function(err, response, body) {
    if (err)
    {
        console.log(err);
        return;
    };
    module.allChampions = JSON.parse(response.body).data;
});

request({url: staticDataUrl + 'versions', qs:{api_key: riotApiKey}}, function(err, response, body) {
    if (err)
    {
        console.log(err);
        return;
    };
    module.version = JSON.parse(response.body)[0];
    imageUrl = 'https://ddragon.leagueoflegends.com/cdn/' + module.version + '/img/champion/';
});

exports.getAllChampions = function(callback) {
    callback(module.allChampions);
}

exports.getChampion = function(name, callback) {
    callback(module.allChampions[name]);
};

exports.getChampionImageUrl = function(name, callback) {
    callback(imageUrl + module.allChampions[name].image.full);
}
