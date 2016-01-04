//Facotrial - interative approach
var factorialIterative = function(n){
	total = 1;
	for(i = n; i > 1; i--){
		total *= i;
	}
	return total;
}

//Factorial - recursive approach
var factorial = function(n){
	if (n === 0){
		return 1;
	}
	else if (n === 1){
		return n;
	}
	else {
		return n * factorial(n-1)
	}
}


//Recursive fibonacci
var fib = function(n){
	if (n === 0 || n === 1){
		return 1;
	}
	else {
		return fib(n-1) + fib(n-2)
	}
}

//Type function
function type(val){
	return Object.prototype.toString.call(val).slice(8,-1)
}

function stringify(obj){
	if (type(obj) === "Function"){
		return obj + "";
	}
	if (type(obj) === "Undefined"){
		return obj + "";
	}
	if (type(obj) === "Null"){
		return obj + "";
	}
	if (type(obj) === "Boolean"){
		return obj + "";
	}
	if (type(obj) === "Number"){
		return obj + "";
	}
	if (type(obj) === "String"){
		return '"' + obj + '"';
	}
	if (type(obj) === "Array"){
		return "[" + 
			obj.map(function(o){
				return stringify(o);
			}).join(",") + "]";
	}
	if (type(obj) === "Object"){
		var result = [];
		Object.keys(obj).forEach(function(key){
			var val = stringify(obj[key]);
			if (val !== null){
				result.push('"' + key + '": ' + val)
			}
		});
		return "{" + result.join(",") + "}";
	}
}


