function Menu () {
	this.isDisplayed = false;
	this.methodCalled = '';
};

Menu.prototype.enter = function () {
	this.create();
	this.methodCalled = 'enter';
};

Menu.prototype.create = function () {
	this.show('Menu shown');
};

Menu.prototype.show = function (msg) {
	this.isDisplayed = true;
};
