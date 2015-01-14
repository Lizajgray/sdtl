'use strict';

/**
 * @ngdoc function
 * @name sdtlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdtlApp
 */
angular.module('sdtlApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tasks = [
      {
        name: 'Get first thing done.'
      },
      {
        name: 'Get second thing done.'
      },
      {
        name: 'Get third thing done.'
      }
    ];
  });
