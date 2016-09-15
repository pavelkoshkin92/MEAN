'use strict';

angular.
module('storeApp').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/', {
            templateUrl: 'templates/product-list.html'
        }).
        when('/app/products/:productId', {
            template: '<product-detail></product-detail>'
        }).
        otherwise('/');
    }
]);