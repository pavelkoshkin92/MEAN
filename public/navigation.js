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
    .controller('navCtrl', function($scope, AuthService, API_ENDPOINT, $http){
        $scope.destroySession = function() {
            AuthService.logout();
        };

        $scope.getInfo = function() {
            $http.get(API_ENDPOINT.url + '/memberinfo').then(function(result) {
                $scope.memberinfo = result.data.msg;
            });
        };

        $scope.logout = function() {
            AuthService.logout();

        };
        $scope.isAuthenticated = AuthService.isAuthenticated;
        console.log(AuthService.isAuthenticated())

    });