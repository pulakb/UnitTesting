'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {
  var $scope,
      ctrl,
      $controller;

  //Loading the module
  beforeEach(module('myApp.controllers'));


  //Inject rootScope and create a new scope for testing
  beforeEach(inject(function ($rootScope, _$controller_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
  }));

  describe('Testing MyCtrl1 and MyCtrl2', function() {
    it('should MyCtrl1 be defined', inject(function($controller) {
      //spec body
      var myCtrl1 = $controller('MyCtrl1');
      expect(myCtrl1).toBeDefined();
    }));

    it('should MyCtrl2 be defined', inject(function($controller) {
      //spec body
      var myCtrl2 = $controller('MyCtrl2');
      expect(myCtrl2).toBeDefined();
    }));
  });

  describe('Testing AddSubtractCtrl', function() {
    it('should increase counter in add method of AddSubtractCtrl', function () {
      //Create an instance of 'AddSubtractCtrl' controller
      ctrl = $controller('AddSubtractCtrl', {
        $scope: $scope
      });

      //Execute 'add' method
      $scope.add(10);

      //Verify result
      expect($scope.counter).toEqual(10);
    });   

    it('should substract counter in subtract method of AddSubtractCtrl', function () {
      //Create an instance of 'AddSubtractCtrl' controller
      ctrl = $controller('AddSubtractCtrl', {
        $scope: $scope
      });

      //Execute 'subtract' method
      $scope.subtract(100);

      //Verify result
      expect($scope.counter).toEqual(-100);
    });
  });

  describe('Testing EditCtrl', function() {
    it('should remove an existing team member in EditCtrl', function () {
      var teamMember = {
          name: "John"
      };

      //Creating an instance of 'EditCtrl' controller
      var ctrl = $controller('EditCtrl', {
        $scope: $scope,
        project: {
          teamMembers: [teamMember]
        }
      });

      //verify the initial setup
      expect($scope.project.teamMembers).toEqual([teamMember]);

      //execute and verify results
      $scope.removeTeamMember(teamMember);
      expect($scope.project.teamMembers).toEqual([]);
    });
  });

  describe('Testing AddSubtractCtrl', function() {
    it('should set \'shouldShowLogin\' false if it is true in LoginCtrl1', function () {
      //Create an instance of 'AddSubtractCtrl' controller
      ctrl =  $controller('LoginCtrl1', {
        $scope: $scope
      });

      //Initial Value is true
      $scope.showLogin();
      expect($scope.shouldShowLogin).toBeFalsy();

      //Again call showLogin(), current value of shouldShowLogin is false 
      $scope.showLogin();
      expect($scope.shouldShowLogin).toBeTruthy();
    });
  });

  describe('Testing CarouselDemoCtrl', function() {
    it('should check how many times addSlide got called', function () {
      //Create an instance of 'CarouselDemoCtrl' controller
      ctrl =  $controller('CarouselDemoCtrl', {
        $scope: $scope
      });

      spyOn($scope, 'addSlide');

      for (var i=0; i<4; i++) {
          $scope.addSlide();
      }

      expect($scope.addSlide.calls.length).toBe(4);
    });

    it('should check count of slides added using addSlide method', function () {
      //Create an instance of 'CarouselDemoCtrl' controller
      ctrl =  $controller('CarouselDemoCtrl', {
        $scope: $scope
      });

      spyOn($scope, 'addSlide').andCallThrough();

      for (var i=0; i<4; i++) {
          $scope.addSlide();
      }

      expect($scope.slides.length).toBe(4);
    });
  });

});