// Functions.js
var concat_string = function(){
	var argumentsArr = Array.prototype.slice.call(arguments)
	var string = ""
	for (i = 0; i < argumentsArr.length; i++){
	    string = string.concat(argumentsArr[i])
	}
	return string;
}


var yourFunctionRunner = function(){
	var argumentsArr = Array.prototype.slice.call(arguments)
	var string = ""
	for (i = 0; i < argumentsArr.length; i++){
	    string = string.concat(argumentsArr[i]())
	}
	return string;
}

var makeAdder = function(A){
	var newFunc = function(x){
		return A + x;
	}
	return newFunc
}

///Test spec 5
///[not sure what to do for Test Spec 5]

// the once function has a lot to do with the idea of closure.
// How do you create a closure?

var value = 0;

var createObjectWithTwoClosures = function(){
	// what does "this" reference? Is the new keyword being used in the test specs? 
	// The value is in the global scope, it should be used as a closure.
	this.oneIncrementer = function(){
		value += 1;
	}
	this.tensIncrementer = function(){
		value += 10;
	}
	this.getValue = function(){
		return value;
	}
}
//The above should be passing, each of the methods returns function,
//There are 3 keys
// and running onesIncrementer and tensIncrementer returns 11
