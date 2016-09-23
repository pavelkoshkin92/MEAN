'use strict';

angular.module('storeApp', ['ngResource', 'ngRoute', 'navigation', 'register', 'login', 'reviews'])
    .controller('appCtrl', function($scope, AuthService, AUTH_EVENTS, $window, API_ENDPOINT, $http) {
        $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
            AuthService.logout();
            $window.alert('Сессия потеряна! Пожалуйста, войдите в систему заново.')
        });
        $scope.getInfo = function() {
            $http.get(API_ENDPOINT.url + '/memberinfo').then(function(result) {
                $scope.memberinfo = result.data.msg;
                $scope.currentUser = result.data.usr;

            });
        };
        $scope.isAuthenticated = AuthService.isAuthenticated;
        if($scope.isAuthenticated()){
            $scope.getInfo()
        }
        else{
            $scope.currentUser = ''
        }
    });




