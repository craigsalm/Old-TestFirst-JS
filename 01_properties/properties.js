properties.js
function setPropertiesOnObjLiteral(object) {
	debugger;
	object.x = 7;
	object['y'] = 8;
	object.onePlus = function (number) {
		return number + 1 ;
	}
}

function setPropertiesOnArrayObj(arrayObject) {
	arrayObject.hello = function hello() {
		return "Hello!";
	}
	arrayObject.full = "stack";
	arrayObject[0] = 5;
	arrayObject.twoTimes = function(number) {
		return number * 2;
	}

}

function setPropertiesOnFunctionObj(functionObject) {
	functionObject.prototype.helloWorld = function() {
		return "Hello World";
	}
	functionObject.divideByTwo = function(number) {
		return number / 2;
	}
	functionObject.year = 2015;
	functionObject = function() {
		return "I am a function object, all functions are objects! Function can have their own properties too!"
	}

}

/**For some reason the last 4 tests only worked
when I put them in reverse order from how they
were asked **/