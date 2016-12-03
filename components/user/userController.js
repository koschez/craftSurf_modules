angular.module('myApp.userController', [])
.controller('userCtrl', ['$scope', 'user', function($scope, user) {
  $scope.user = user.data;
}]);