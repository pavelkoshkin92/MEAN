'use strict';

angular.module('login', [])
    .directive('login', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/login.html',
            controller: 'logCtrl'
        }
    })
    .controller('logCtrl', function($scope, AuthService, $location){
        $scope.user = {
            name: '',
            password: ''
        };
        $scope.login = function() {
            AuthService.login($scope.user).then(function(msg) {
                $location.path('/products');

            }, function(errMsg) {
                $scope.message = errMsg
            });
        };
        
    });