angular.module('myApp.routes', [])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: "/login",
    templateUrl: 'components/login/views/login.html', 
    controller: 'loginCtrl'
  })
  .state('info', {
    url: "/info",
    templateUrl: 'components/user/views/info.html', 
    controller: 'userCtrl',
    resolve: {
      user: function(userService) {
        return userService.getUser();
      },
    }
  });
  $urlRouterProvider.otherwise('/login');
}]);
