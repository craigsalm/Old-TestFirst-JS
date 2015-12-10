calculator.js
function createCalculator() {
	var value = 0;
	var calculator = {};
	calculator.add = function (number) {
		return value + number;
	}
	calculator.subtract = function (number) {
		return value - number;
	}

}
/**None of these tests are working, must be something wrong with
initial set-up of the calculator object that I can't figure out.**/