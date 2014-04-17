'use strict';

/* jasmine specs for directives go here */

describe('Testing a button directive', function () {
  var $element, 
      $scope,
      $compile;

  beforeEach(module('myApp.directives'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $scope = _$rootScope_.$new();
    $compile = _$compile_;    
  }));

  it("adds a 'btn' class to the button element", function () {
    //
    $element = angular.element("<button></button>");
    $compile($element)($scope);

    //Expect to contain class btn
    expect($element.hasClass('btn')).toBeTruthy();
  });

  it('leaves the contents of the button intact', function() {
    $element = $compile('<button>Click Me!</button>')($scope);
    expect($element.text()).toBe('Click Me!');
  });

  it('adds size classes correctly', function() {
    $element = $compile('<button size="large"></button>')($scope);
    expect($element.hasClass('btn-large')).toBe(true);
  });

  it('adds primary class to submit buttons', function() {
    $element = $compile('<button type="submit"></button>')($scope);
    expect($element.hasClass('btn-primary')).toBe(true);
  });    

});