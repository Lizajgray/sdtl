'use strict';

/**
 * @ngdoc service
 * @name sdtlApp.config
 * @description
 * # config
 * Value in the sdtlApp.
 */
angular.module('sdtlApp')
  .value('config', {
    firebaseAppUrl: 'https://brilliant-torch-8296.firebaseIO.com',
    taskExpiration: 604800000
  });
