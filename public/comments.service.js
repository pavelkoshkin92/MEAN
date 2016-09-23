'use strict';

angular.
module('storeApp').
factory('Comment', ['$resource',
    function($resource) {
        return $resource('api/reviews/:productId', {
            productId: "@productId"
        }, {
            save: {method: 'POST'},
            list: {method: 'GET'}
        });
    }
]);