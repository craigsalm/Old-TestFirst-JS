// factorial iterative
function factorialIterative(n) {
  var total = 1;
  for(var i = 2; i <= n; i++) {
    total = total * i;
  }
  return total;
}


// factorial recursive
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// fib example

function fib(n) {
  if(n === 0 || n ===1) { return 1; }
  return fib(n-1) + fib(n-2);
}


function type(obj) {
  return Object.prototype.toString.call(obj).match(/.* (.*)\]/)[1];
}


// stringify Object tree
function stringify(obj) {
  if (type(obj) === "Function") {
    return obj + '';
  }
  if (type(obj) === "Undefined") {
    return obj + '';
  }
  if (type(obj) === "Null") {
    return "null";
  }
  if (type(obj) === "Boolean") {
    return obj + '';
  }
  if (type(obj) === "Number") {
    return obj + '';
  }
  if (type(obj) === "String") {
    return '"' + obj + '"';
  }
  if (type(obj) === "Array") {
    return '[' +
    obj.map(function(o) {
      return stringify(o);
    }).join(",") + ']';
  }
  if (type(obj) === "Object") {
    var result = [];
    Object.keys(obj).forEach(function(key) {
      var val = stringify(obj[key]);
      if (val !== null) {
        result.push('"' + key + '": ' + val);
      }
    });
    return "{" + result.join(",") + "}";
  }
}