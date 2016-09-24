'use strict';

angular.module('comments', ['jkAngularRatingStars'])
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
            id_user: $scope.currentUser.usrid,
            username: $scope.currentUser.usrname,
            rate: '',
            date: moment().format('LLLL')
        };

        $scope.sendMsg = function(){
            Comment.save({productId: $scope.product._id}, $scope.message, function(res){
                $scope.resMsg = res.msg;
                $scope.message.text = '';
                $scope.message.rate = '';
                $scope.getMsg();
            })
        };


        $scope.getMsg = function(){
            $scope.comments = Comment.query({productId: $scope.product._id});
        }
        

    });
