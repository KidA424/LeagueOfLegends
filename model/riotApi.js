///////////////////////////////
//////// RiotApi Model ////////
///////////////////////////////

var request = require('request');
var url = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2';
var riotApiKey = require('../riotApiKey').riotApiKey;


request({url: url + '/champion', qs:{api_key: riotApiKey, champData: 'all'}}, function(err, response, body) {
    if (err)
    {
        console.log(err);
        return;
    };
    module.allChampions = JSON.parse(response.body).data;
});

exports.getAllChampions = function(callback) {
    callback(module.allChampions);
}

exports.getChampion = function(name, callback) {
    callback(module.allChampions[name]);
};
