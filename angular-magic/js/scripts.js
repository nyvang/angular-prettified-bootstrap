(function(){ // Begin closure
	'use strict';
	var app = angular.module('ngBootstrap', [ ]);

  app.directive('container', function () {
    return {
    	transclude: true,
      templateUrl: 'angular-magic/templates/container.html',
      restrict: 'E'
    };
	});

}) (); // End closure