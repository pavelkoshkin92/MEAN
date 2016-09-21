'use strict';

angular.
module('storeApp').
factory('Product', ['$resource',
    function($resource) {
        return $resource('api/products/:productId', {
            productId: '@productId'
        });
    }
]);