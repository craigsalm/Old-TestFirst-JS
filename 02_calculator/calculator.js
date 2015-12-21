calculator.js
var createCalculator = function() {
    var calculator = {};
	calculator.total = 0;

	calculator.value = function() {
		return this.total;
	}
	calculator.add = function(number) {
		this.total = this.total + number;
	}
	calculator.subtract = function(number) {
		this.total = this.total - number;
	}
	return calculator;
}

/**None of these tests are working, must be something wrong with
initial set-up of the calculator object that I can't figure out.**/