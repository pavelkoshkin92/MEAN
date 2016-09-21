'use strict';

angular.module('storeApp')
    .controller('productDetailCtrl', function ($scope, $routeParams, Product) {
        console.log($routeParams);
        
        Product.get({productId: $routeParams.productId}, function(product){

            $scope.product = product;
            console.log(product)
        })

    });