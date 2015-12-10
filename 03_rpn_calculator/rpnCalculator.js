rpnCalculator.js
var RPNCalculator = function() {
	this.total = 0;
	this.stack = [];
}

RPNCalculator.prototype.value = function() {
	return this.value;
}
RPNCalculator.prototype.add = function() {
	if (this.stack < 2) {
		throw new Error("rpnCalculator is empty")
	}
	else {
		this.total += this.stack.pop() + this.stack.pop();
	}
}

RPNCalculator.prototype.minus = function() {
if (this.stack < 2) {
		throw new Error("rpnCalculator is empty")
	}
	else {
		this.total += this.stack.pop() - this.stack.pop();
	}
}

RPNCalculator.prototype.multiply = function() {
if (this.stack < 2) {
		throw new Error("rpnCalculator is empty")
	}
	else {
	
		this.total += this.stack.pop() * this.stack.pop();
	}
}

RPNCalculator.prototype.divide = function() {
if (this.stack < 2) {
		throw new Error("rpnCalculator is empty")
	}
	else {
		this.total += this.stack.pop() / this.stack.pop();
	}
}

/**None of these tests are working, must be something wrong with
initial set-up of the rpn calculator object that I can't figure out. 
Had the same issue in calculator**/