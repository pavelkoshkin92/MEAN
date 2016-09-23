'use strict';

angular.module('reviews', [])
    .directive('reviews', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/reviews.html',
            controller: 'reviewsCtrl'
        }
    })

    .controller('reviewsCtrl', function($scope, Review){
        // $scope.message = {
        //     text: '',
        //     id_user: $scope.currentUser.usrname,
        //     username: $scope.currentUser.usrid,
        //     rate: ''
        // };
        //
        // $scope.sendMsg = function(){
        //     Review.save($scope.message)
        // }

    });
