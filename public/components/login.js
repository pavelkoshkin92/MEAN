'use strict';

angular.module('login', [])
    .directive('login', function(){
        return {
            restrict: 'E',
            templateUrl: '../templates/login.html',
            controller: 'logCtrl'
        }
    });
