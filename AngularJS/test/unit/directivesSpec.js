'use strict';

/* jasmine specs for directives go here */

describe('Testing a simple directive', function () {
  var $element, 
      $scope,
      $compile;

  beforeEach(module('myApp.directives'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $scope = _$rootScope_.$new();
    $compile = _$compile_;
    $element = $compile("<simple-directive></simple-directive>")($scope);
    
  }));

  it("should equal 4", function () {
    // fire all the watches, so the scope expression {{2 + 2}} will be evaluated
    $scope.$digest();

    //Expect to contain 4
    expect($element.html()).toContain("4");
  });
});