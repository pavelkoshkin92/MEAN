'use strict';

angular.module('comments', ['jkAngularRatingStars'])
    .directive('comments', function(){
        return {
            restrict: 'E',
            templateUrl: '../templates/comments.html',
            controller: 'commentsCtrl'
        }
    });

