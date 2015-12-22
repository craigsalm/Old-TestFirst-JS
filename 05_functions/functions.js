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

var value = 0;

var createObjectWithTwoClosures = function(){
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