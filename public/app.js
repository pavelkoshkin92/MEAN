'use strict';

angular.module('storeApp', ['ngResource', 'ngRoute'])
    .controller('mainCtrl', function($scope, $http){

        $http.get('/products').success(function(response){
            console.log("A got the data I requested");
            $scope.products = response;
        });

        $scope.propertyName = 'title';
        $scope.reverse = false;

        $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };

    });

