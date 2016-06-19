'use strict';

angular.module('jwtNewApp').config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('main', {
      url: '/',
      templateUrl: '/views/main.html'
    })
      .state('register', {
        url: '/register',
        templateUrl: '/views/register.html',
      controller: 'RegisterCtrl'
      });
  });
