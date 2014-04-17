'use strict';

/* This directive is used as a tag <simple-directive></simple-directive>. 
   It replaces the entire tag with the template <h1>What is there in {{2 + 2}} ?</h1>. 
   Now we are going to write a jasmine unit test to verify this functionality. Note that the 
   expression {{2 + 2}} times will also be evaluated in the rendered content. */

angular.module('myApp.directives', [])
  .directive('simpleDirective', function () {
	    return {
	        restrict: 'E',
	        replace:  true,
	        template: '<h1>What is there in {{2 + 2}} ?</h1>'
	    };
	})
  .directive('button', function() {
		return {
			restrict: 'E',
			compile: function(element, attributes) {
			  element.addClass('btn');
			  if ( attributes.type === 'submit' ) {
			    element.addClass('btn-primary');
			  }
			  if ( attributes.size ) {
			    element.addClass('btn-' + attributes.size);
			  }
			}
		};
   })
   .directive('planItem', function($location) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="item" ng-transclude></div>',
            transclude: true,
            scope: {},
            link: function(scope, elm) {
                // assume we have no jQuery.
                angular.element(elm.children()[0]).bind('click', function() {
                    localStorage.highlighted_plan_id = angular.element(elm.children()[1]).val();
                    $location.path('/plandetails');
                });
            }
        };
	});
