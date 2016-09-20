'use strict';

angular.module('storeApp', ['ngResource', 'ngRoute', 'navigation'])
    .controller('mainCtrl', function($scope, Product){
        $scope.products = Product.query();
        $scope.propertyName = 'title';
        $scope.reverse = false;
        $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };

    });





