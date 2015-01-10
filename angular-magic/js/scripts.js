(function(){ // Begin closure
	'use strict';
	
	// We start out by bootstrapping AngularJS itself, which is initiated after the DOM is ready
	var app = angular.module('ngBootstrap', [ ]);

	/**
	 * Then we define our first directive, cooresponding to the 
	 * outer container in Bootstrap, which of course is the 'container'
	 * 
	 * Replace: <div class="container"></div>
	 * With: <container></container>
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
    	 * <container> element is encountered by Angular.
    	 *
    	 * @note: Please note, that for simplicity, I name the template-files 
    	 * the name of the full original Bootstrap classes
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
	})
	/** 
	 * Replace: <div class="row"></div>
	 * With: <row></row>
	 */
	.directive('row', function () {
    return {
    	transclude: true,
      templateUrl: 'angular-magic/templates/row.html', 
      restrict: 'E'
    };
	})
	/** 
	 * Replace: <div class="row clearfix"></div>
	 * With: <row-clear></row-clear>
	 */
	.directive('rowClear', function () {
    return {
    	transclude: true,
      templateUrl: 'angular-magic/templates/row-clearfix.html',
      restrict: 'E'
    };
	})
	/** 
	 * Replace: <div class="col-md-12"></div>
	 * With: <colm12></colm12>
	 */
	.directive('colm12', function () {
    return {
    	transclude: true,
      templateUrl: 'angular-magic/templates/col-md-12.html',
      restrict: 'E'
    };
	})
	/** 
	 * Replace: <div class="col-md-6"></div>
	 * With: <colm6></colm6>
	 */
	.directive('colm6', function () {
    return {
    	transclude: true,
      templateUrl: 'angular-magic/templates/col-md-6.html',
      restrict: 'E'
    };
	})
	/** 
	 * Replace: <div class="jumbotron"></div>
	 * With: <jumbotron></jumbotron>
	 */
	.directive('jumbotron', function () {
    return {
    	transclude: true,
      templateUrl: 'angular-magic/templates/jumbotron.html',
      restrict: 'E'
    };
	})
	/** 
	 * Replace: <div class="ul class="nav nav-tabs""></div>
	 * With: <navigation></navigation>
	 */
	.directive('navigation', function () {
    return {
    	transclude: true,
      templateUrl: 'angular-magic/templates/ul-nav-nav-tabs.html',
      restrict: 'E'
    };
	})
	/** 
	 * Replace: <div class="col-md-4"></div>
	 * With: <colm4></colm4>
	 */
	.directive('colm4', function () {
    return {
    	transclude: true,
      templateUrl: 'angular-magic/templates/col-md-4.html',
      restrict: 'E'
    };
	})
	/** 
	 * Replace: <div class="thumbnail"></div>
	 * With: <thumbnail></thumbnail>
	 */
	.directive('thumbnail', function () {
    return {
    	transclude: true,
      templateUrl: 'angular-magic/templates/thumbnail.html',
      restrict: 'E'
    };
	});
}) (); // End closure