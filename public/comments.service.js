'use strict';

angular.
module('storeApp').
factory('Comment', ['$resource',
    function($resource, $scope) {
        return $resource('api/reviews/:productId', {
            productId: "@productId"
        }, {
            save: {method: 'POST'},
            list: {method: 'GET'}
        });
    }
]);