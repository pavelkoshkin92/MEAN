'use strict';

angular.module('storeApp', ['ngResource', 'ngRoute'])
    .controller('mainCtrl', function($scope, $http){
        $scope.text = "lorem ipsum";

        $http.get('/products').success(function(response){
            console.log("A got the data I requested");
            $scope.products = response;
        })
    });

