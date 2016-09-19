'use strict';

angular.
module('storeApp').
factory('Product', ['$resource',
    function($resource) {
        return $resource('products/:productId', {
            productId: '@productId'
        });
    }
]);