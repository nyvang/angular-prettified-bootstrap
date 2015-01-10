'use strict';

angular.module('ccnndkApp')
  .directive('container', function () {
    return {
    	transclude: true,
      templateUrl: 'app/directives/container/container.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      	
      }
    };
  });