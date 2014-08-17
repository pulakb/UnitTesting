describe('Test Menu', function () {
	var menuObj;

	beforeEach(function () {
		menuObj = new Menu();
	});

	it('should set methodCalled property enter', function () {
		spyOn(menuObj, 'create');
		menuObj.enter();
		expect(menuObj.create).toHaveBeenCalled();
		expect(menuObj.methodCalled).toEqual('enter');
	});

	it('should call show with \'Menu shown\' when create method is called', function () {
		spyOn(menuObj, 'show');
		menuObj.create();
		expect(menuObj.show).toHaveBeenCalled();
		expect(menuObj.show).toHaveBeenCalledWith('Menu shown');
	});

	it('should set isDisplayed true', function () {		
		menuObj.show();
		expect(menuObj.isDisplayed).toBe(true);
	});
});