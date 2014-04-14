'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', [function() {
  	/* MyCtrl1 */
  }])
  .controller('MyCtrl2', [function() {
  	/* MyCtrl2 */
  }])
  .controller('AddSubtractCtrl', ['$scope', function($scope) {
  	/* AddSubtractCtrl */
  	$scope.counter = 0;

  	$scope.add = function (amount) {
  		$scope.counter += amount;
  	};

  	$scope.subtract = function (amount) {
  		$scope.counter -= amount;
  	};

  }])
  .controller('EditCtrl', ['$scope', 'project', function($scope, project) {
  	/* EditCtrl */
    $scope.project = project;

    $scope.removeTeamMember = function(teamMember) {
      var idx = $scope.project.teamMembers.indexOf(teamMember);
      if(idx >= 0) {
        $scope.project.teamMembers.splice(idx, 1);
      }
    };

  }]).
  controller('LoginCtrl1', ['$scope', function ($scope) {
  	/* LoginCtrl1 */
  	$scope.shouldShowLogin = true;

  	$scope.showLogin = function () {
		$scope.shouldShowLogin = !$scope.shouldShowLogin;
  	};
  }]).
  controller('CarouselDemoCtrl', ['$scope', function ($scope) {
  	/* CarouselDemoCtrl */
  	$scope.myInterval = 5000;

    var slides = $scope.slides = [];
    var images = [
        '/assets/img/package_tours/1.gif',
        '/assets/img/package_tours/2.jpg',
        '/assets/img/package_tours/3.jpg',
        '/assets/img/package_tours/4.JPG',
    ];

    var k = 0;

    $scope.addSlide = function() {
        var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
        slides.push({
            image: images[k],
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Goa', 'Andaman', 'Himachal', 'Kerala'][slides.length % 4]
        });

        k++;
    };
   }]);