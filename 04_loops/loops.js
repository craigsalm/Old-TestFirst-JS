var repeat = function(input, multi){
	var finalString = "";
	for(multi; multi > 0; multi--){
		finalString += input;
	}
	return finalString;
}


var sum = function(inputArr){
	var total = 0;
	for(var i = 0; i < inputArr.length; i++){
		total += inputArr[i];
	}
	return total;
}

var join = function(inputArr, delimiter){
	var finalString = "";
	for(var i = 0; i < inputArr.length; i++){
		finalString+= inputArr[i];
		if(typeof delimiter === "undefined"){
			delimiter = "";
		}
		if(i !== inputArr.length-1){
			finalString += delimiter;
		}
	}
	return finalString;
}

var gridGenerator = function(size){
	var board = "";
		for(var i = 0; i < size; i++){
			for(var j = 0; j < size; j++){
				if((i+j) % 2 === 0){
					board += "#";	
				} else {
					board += " ";
				}
			}
			board += "\n";
		}	
	return board;
}


// brute force solution
var largestTriplet = function(c){
  var tripletArray = [0,0,0];
  var sqr = function(base){
  	return base*base;
  };
  
  for(var a = 1; a < c; a++){
    for(var b = 1; b < c; b++){
      for(var i = 1; i <= c; i++){
        if(a<b && b >= tripletArray[1]){
          if(sqr(a) + sqr(b) === sqr(i)){
              tripletArray = [a,b,i];
          }
        }
      }
    }
  }
 	return tripletArray;
};



function paramify(obj) {
  var params = [];
  for (var key in obj) {
    if (Object.hasOwnProperty.call(obj, key)){
      params.push(key + "=" + obj[key]);
    }
  }
  params.sort();
  return join(params, "&");
}


