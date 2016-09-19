'use strict';

angular.
module('storeApp').
factory('Product', ['$resource',
    function($resource) {
        return $resource('products/:id', {}, {
            query: {
                method: 'GET',
                params: {productId: 'products'},
                isArray: true
            }
        });
    }
]);