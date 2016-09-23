'use strict';

angular.
module('storeApp').
factory('Review', ['$resource',
    function($resource, $scope) {
        return $resource('api/reviews/:productId', {
            productId: $scope.product._id
        });
    }
]);