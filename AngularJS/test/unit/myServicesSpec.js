'use strict';

/* jasmine specs for services go here */

describe('test services', function() {
	var $notificationsArchive,
		$httpBasedService,
		$users,
		$httpBackend;
  	
  	beforeEach(module('myApp.myServices'));

	beforeEach(inject(function (_$httpBackend_, _notificationsArchive_, _httpBasedService_, _users_) {
		 $httpBackend = _$httpBackend_;
		 $notificationsArchive = _notificationsArchive_;
		 $httpBasedService = _httpBasedService_;
		 $users = _users_;		 
	}));

	// make sure no expectations were missed in your tests.
    // (e.g. expectGET or expectPOST)
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

  	describe('test notificationsArchive', function () {
	  	it('should save notification message in archive', function () {
	  		var notification = {msg: 'Old message.'};

	  		//Call archieve method
	  		$notificationsArchive.archive(notification);
	  		//Both give same result
	  		expect($notificationsArchive.getArchived()).toEqual([notification]);
	  		expect($notificationsArchive.getArchived()).toContain(notification);
	  	});

	  	it('should retun empty array when emptyArchived is called', function () {
	  		$notificationsArchive.emptyArchived();
	  		expect($notificationsArchive.getArchived()).toEqual([]);
	  	});	
	});

  	describe('test httpBasedService', function () {
	    it('should send the message and return the response', function () {
	        // set up some data for the http call to return and test later.
	        var returnData = {excited:true};

	        // expectGET to make sure this is called once.
	        $httpBackend.expectGET('somthing.json?msg=wee').respond(returnData);

	        //make the call
	        var returnedPromise = $httpBasedService.sendMessage('wee');

	        // set up a handler for the response, that will put the result
	        // into a variable in this scope for you to test.
	        var result;
	        returnedPromise.then(function (response) {
	            result = response;
	        });

	        // flush the backend to "execute" the request to do the expectedGET assertion.
	        $httpBackend.flush();

	        expect(result).toEqual(returnData);
	    });  		
  	});

  	describe('test users', function () {
  		it('should query database for querying users', function () {
  			// set up some data for the http call to return and test later.
	        var returnData = [{
							    "userId": "u00001",
							    "username": "pulak"
							},
							{
							    "userId": "u00002",
							    "username": "rahul"
							}];

			// expectGET to make sure this is called once.
	        $httpBackend.expectGET('/data/users.json').respond(returnData);

			//make the call
			var returnedPromise = $users.get();

	        // set up a handler for the response, that will put the result
	        // into a variable in this scope for you to test.
	        var result;
	        returnedPromise.then(function (response) {
	            result = response;
	        });

	        // flush the backend to "execute" the request to do the expectedGET assertion.
	        $httpBackend.flush();

	        expect(result).toEqual(returnData);
  		});
  	});
});