'use strict';

angular.
module('storeApp').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/products', {
            templateUrl: 'templates/product-list.html'
        }).
        when('/products/:productId', {
            templateUrl: 'templates/product-detail.html'
        }).
        otherwise('/products');
    }
]);