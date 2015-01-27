'use strict';

/**
 * @ngdoc filter
 * @name sdtlApp.filter:expired
 * @function
 * @description
 * # expired
 * Filter in the sdtlApp.
 */
angular.module('sdtlApp')
  .filter('expired', ['config', function (config) {
    return function (items, isOpposite) {
      var filtered = [];
      var timeNow = new Date().getTime();
      var opposite = (isOpposite === undefined) ? false : isOpposite;

      var isExpired = function (task) {
        return ((timeNow - task.createdAt) >= config.taskExpiration);
      };

      if (opposite) {
        angular.forEach(items, function (item) {
          if (!isExpired(item) && !item.isComplete) {
            filtered.push(item);
          }
        });
      } else {
        angular.forEach(items, function (item) {
          if (isExpired(item) || item.isComplete === true) {
            filtered.push(item);
          }
        });
      }

      return filtered;
    };
  }]);
