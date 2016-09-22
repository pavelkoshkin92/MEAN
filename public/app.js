'use strict';

angular.module('storeApp', ['ngResource', 'ngRoute', 'navigation', 'register', 'login'])
    .controller('appCtrl', function($scope, AuthService, AUTH_EVENTS, $window) {
        $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
            AuthService.logout();
            $window.alert('Сессия потеряна! Пожалуйста, войдите в систему заново.')
        });
    });




