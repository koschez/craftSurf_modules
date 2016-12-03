var app = angular.module('myApp.loginController', [])
.controller('loginCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.loginClickHandler = function() {
            $state.go('info');
    };
}]);