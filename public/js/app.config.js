'use strict';

angular.
module('storeApp').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/products', {
            templateUrl: '../templates/product-list.html',
            controller: 'productListCtrl'
        }).
        when('/products/:productId', {
            templateUrl: '../templates/product-detail.html',
            controller: 'productDetailCtrl'
        }).

        otherwise({redirectTo: '/products'});
    }
]);