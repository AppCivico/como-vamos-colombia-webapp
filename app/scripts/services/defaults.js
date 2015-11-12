'use strict';

/**
 * @ngdoc service
 * @name comoVamosColombiaApp.Defaults
 * @description
 * # Defaults
 * Service in the comoVamosColombiaApp.
 */
angular.module('comoVamosColombiaApp')
  .service('Defaults', function () {
    var _graphColors = {
      firstAccent: '#BB0E80',
      secondAccent: '#2C031E',
      thirdAccent: '#F46DC6',
      fourthAccent: '#646464',
    };

    var _mapColors = {
      firstAccent: '#BB0E80',
      secondAccent: '#2C031E',
      thirdAccent: '#F46DC6',
      fourthAccent: '#646464',
    };

    return {
      graphColors: _graphColors,
      mapColors: _mapColors,
    };
  });
