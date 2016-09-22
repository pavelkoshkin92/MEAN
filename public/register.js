'use strict';

angular.module('register', [])
    .directive('register', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/register.html',
            controller: 'regCtrl'
        }
    })
    .controller('regCtrl', function($scope, AuthService){
        $scope.user = {
            name: '',
            password: ''
        };
        $scope.register = function(){
            AuthService.register($scope.user).then(function(msg) {
                $scope.message = msg;
                
            }, function(errMsg) {
                $scope.message = errMsg
            });
        }


    });