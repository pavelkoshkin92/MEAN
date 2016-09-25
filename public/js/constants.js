'use strict';

angular.module('storeApp')
    .constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated'
})
    .constant('API_ENDPOINT', {
        url: '/api'

    });