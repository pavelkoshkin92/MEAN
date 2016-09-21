'use strict';

angular.module('register', [])
    .directive('register', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/register.html',
            controller: 'regCtrl'
        }
    })
    .controller('regCtrl', function($scope){
        $scope.user = {
            name: '',
            password: ''
        }
    });