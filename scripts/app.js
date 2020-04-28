var app = angular.module('reducequeue',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'scripts/views/login.html',
        controller:"loginController"
      })
      .state('feed', {
        url: '/home',
        templateUrl: 'scripts/views/home.html',
        controller:"homepageController"
      })

    $urlRouterProvider.otherwise('/login');
});
