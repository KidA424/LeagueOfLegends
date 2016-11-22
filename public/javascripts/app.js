///////////////////////////////////
//////// Main Angular App /////////
///////////////////////////////////

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.run(function($rootScope) {
    $rootScope.Utils = {
        keys: Object.keys
    };
    $rootScope.active = 'Home';
});

app.config(function($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl : 'partials/index',
        controller : 'home'
    })

    .when('/champions', {
        templateUrl : 'partials/api/champions',
        controller : 'champions'
    });

});

app.controller('home', function($scope, $rootScope) {
    console.log($rootScope.active);
});

app.controller('champions', function($scope, $http, $rootScope) {
    $scope.loaded = false;
    $scope.champions = {};
    $http.get('/api/champions').then(function(response) {
        $scope.champions = response.data;
        $scope.loaded = true;
    });
});
