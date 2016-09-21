'use strict';

angular.module('navigation', [])
    .directive('navigation', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/navigation.html',
            controller: 'navCtrl'
        }
    })
    .directive('eatClick', function() {
        return function(scope, element, attrs) {
            $(element).click(function(event) {
                event.preventDefault();
            });
        }
    })
    .controller('navCtrl', function($scope){

    });