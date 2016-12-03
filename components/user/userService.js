angular.module('myApp.userService', [])
.factory('userService', ['$http', function($http) {
  var sdo = {
    getUser: function() {
      var promise = $http({ method: 'GET', url: '/log_in' }).success(function(data, status, headers, config) {
        return data;
      });
      return promise;
    }
  }
  return sdo;
}])