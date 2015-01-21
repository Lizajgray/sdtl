'use strict';

/**
 * @ngdoc function
 * @name sdtlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdtlApp
 */
angular.module('sdtlApp')
  .controller('MainCtrl', function ($scope, $firebase) {

    var ref = new Firebase("https://sdtl.firebaseio.com/tasks");

    // create an AngularFire reference to the data
    var sync = $firebase(ref);

    var timeNow = function () {
      return new Date().getTime();
    };

    // download the data into a local object
    $scope.tasks = sync.$asArray();

    $scope.addTask = function(text) {
      $scope.tasks.$add({
        text: text,
        createdAt: timeNow(),
        timeDiff: 0
      });
    };

    $scope.timeDiff = function(task) {
      return timeNow() - task.createdAt;
    };

    $scope.isExpired = function (task) {
      return 604800000 < $scope.timeDiff(task.createdAt);
    }

  });
