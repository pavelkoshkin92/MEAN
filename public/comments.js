'use strict';

angular.module('comments', [])
    .directive('comments', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/comments.html',
            controller: 'commentsCtrl'
        }
    })

    .controller('commentsCtrl', function($scope, Comment){
        $scope.message = {
            text: '',
            id_user: $scope.currentUser.usrname,
            username: $scope.currentUser.usrid,
            rate: ''
        };

        $scope.sendMsg = function(){
            Comment.save({productId: $scope.product._id}, $scope.message, function(res){

            })
        }
        

    });
