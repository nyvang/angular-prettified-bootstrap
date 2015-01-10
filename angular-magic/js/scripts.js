(function(){ // Begin closure
	'use strict';
	// We start out by bootstrapping AngularJS itself, which is initiated after the DOM is ready
	var app = angular.module('ngBootstrap', [ ]);

	/**
	 * Then we define our first directive, cooresponding to the 
	 * outer container in Bootstrap, which of course is the 'container'
	 */
  app.directive('container', function () {
    return {
    	/**
    	 * The transclude is the magic keyword here.
			 * Without it, our Directive element will not act like a wrapper 
			 * and will not contain anything...
    	 */
    	transclude: true, // <-- Important 
    	
    	/**
    	 * Then we define the template we wish to use whenever the 
    	 * <container> element is encountered by Angular
    	 */
      templateUrl: 'angular-magic/templates/container.html',

      /**
       * The 'E' in restrict tells Angular that we allow only
       * 'Elements' to use this directive.
       * We could also have use 'A' which stands for 'Attribute'.
       * This, however, would have gotten os nowhere, because we´d still 
       * have to write the div-tag - just with an attribute instead of 
       * the class reference (class="container") - like this: <div container></div
       */
      restrict: 'E'
    };
	});

}) (); // End closure