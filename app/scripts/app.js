'use strict';

/**
 * @ngdoc overview
 * @name sdtlApp
 * @description
 * # sdtlApp
 *
 * Main module of the application.
 */
angular
  .module('sdtlApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
