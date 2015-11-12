'use strict';

/**
 * @ngdoc function
 * @name comoVamosColombiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the comoVamosColombiaApp
 */
angular.module('comoVamosColombiaApp')
  .controller('MainCtrl', ['Api', 'Graph', function (Api, Graph) {
      var self = this;
      self.firstSelectedOption = {
        city: undefined,
        category: undefined,
        indicator: undefined,
      };

      self.secondSelectedOption = {
        city: undefined,
        category: undefined,
        indicator: undefined,
      };

      self.initialize = function() {
        // Comment this when using real data
        self.showChart = true;
        self.data = Api.dummy();
        self.chartConfig = Graph.chartConfig(self.data);

        // Uncomment this for real functionality
        // Api.initialize().then(function successCallback(response){
        //   // Fetch graph config options
        //   // self.chartConfig = Graph.chartConfig(null);
        //   // self.showChart = true;
        // }, function errorCallback(response){
        //   console.error(response);
        //   // self.showChart = false;
        // });
      };

      self.initialize();
  }]);
