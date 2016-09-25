angular.module('login')
    .controller('logCtrl', function($scope, AuthService, $location){
        $scope.user = {
            name: '',
            password: ''
        };
        $scope.login = function() {
            AuthService.login($scope.user).then(function(msg) {
                $location.path('/products');
                $scope.getInfo();
                $('#modal-2').modal('hide');
                $scope.user.name = '';
                $scope.user.password = '';


            }, function(errMsg) {
                $scope.errmessage = errMsg
            });
        };

    });