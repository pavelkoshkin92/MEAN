angular.module('register')
    .controller('regCtrl', function($scope, AuthService){
        $scope.user = {
            name: '',
            password: ''
        };
        $scope.register = function(){
            AuthService.register($scope.user).then(function(msg) {
                $scope.message = msg;
                $scope.user.name = '';
                $scope.user.password = ''

            }, function(errMsg) {
                $scope.message = errMsg
            });
        }


    });