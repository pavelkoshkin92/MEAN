'use strict';

angular.module('navigation', [])
    .directive('navigation', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/navigation.html',
            controller: 'navCtrl'
        }
    })
    .controller('navCtrl', function($scope){
        
    });