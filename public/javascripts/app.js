///////////////////////////////////
//////// Main Angular App /////////
///////////////////////////////////

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.run(function($rootScope) {
    $rootScope.Utils = {
        keys: Object.keys
    };
//    $rootScope.active = 'Home';
});

// Routing
app.config(function($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl : 'partials/index',
        controller : 'home'
    })

    .when('/champions', {
        templateUrl : 'partials/api/champions',
        controller : 'champions'
    })

    .when('/champions/:champion', {
        templateUrl : 'partials/api/champion',
        controller : 'champion'
    });
});

// Home controller
app.controller('home', function($scope, $rootScope) {
    $rootScope.active = 'Home';
});

// Champions controller
app.controller('champions', function($scope, $http, $rootScope, $location) {
    $rootScope.active = 'Champions';
    $scope.loaded = false;
    $scope.champions = {};

    $scope.trClick = function(champion) {
        $location.path('/champions/' + champion);
    };

    $http.get('/api/champions').then(function(response) {
        $scope.champions = response.data;
        $scope.loaded = true;
    });
});

// Champion controller
app.controller('champion', function($scope, $http, $rootScope, $routeParams) {
    $rootScope.active = 'Champions';
    var loaded = {champion: false, imageUrl: false};
//    $scope.champion = {stats: {}};
    
    $http.get('/api/champions/' + $routeParams.champion).then(function(response) {
        $scope.champion = response.data;
//        $scope.imageUrl = 'https://ddragon.leagueoflegends.com/cdn/6.23.1/img/champion/' + $scope.champion.image.full;
        loaded.champion = true;
    });

    $http.get('/api/champions/images/' + $routeParams.champion).then(function(response) {
        $scope.imageUrl = response.data;
        loaded.imageUrl = true;
    });

    $scope.isLoaded = function() {
        return Object.values(loaded).every(function(x) { return(x == true) });
    };

});
