'use strict';

angular.module('storeApp')
    .controller('productDetailCtrl', function ($scope, $routeParams, Product) {
        console.log($routeParams);
        // $scope.product = Product.get({productId: $routeParams.productId});
        // Product.get({productId: $routeParams.productId}).success(function(response){
        //     $scope.product = response
        // })
        Product.get({productId: $routeParams.productId}, function(product){
            console.log('HAHAHA');
            $scope.product = product;
            console.log(product)
        })

    });