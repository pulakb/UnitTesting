'use strict';

/* jasmine specs for directives go here */

describe('Testing a plan item directive', function () {
  var $element, 
      $scope,
      $compile;

  beforeEach(module('myApp.directives'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $scope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  it("has a 'item' class to the planItem element", function () {
    $element = $compile('<plan-item></plan-item>')($scope);
    expect($element.hasClass('item')).toBe(true);
  });
});