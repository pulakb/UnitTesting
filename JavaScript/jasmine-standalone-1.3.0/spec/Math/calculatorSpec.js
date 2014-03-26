describe('Test Calculator', function () {
	var calc;

	beforeEach(function () {
		calc = new calculator();
	});

	it('should return addition of two numbers', function () {
		expect(calc.add(4, 5)).toBe(9);
	});

	it('should return substract of two numbers', function () {
		expect(calc.substract(10, 5)).toBe(5);
	});

	it('should return multipltiplication of two numbers', function () {
		expect(calc.multiply(4, 5)).toBe(20);
	});

	it('should return dividition of two numbers', function () {
		expect(calc.divide(10, 5)).toBe(2);
	});
});