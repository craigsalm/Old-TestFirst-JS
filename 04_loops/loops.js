var repeat = function(string, loops) {
	result = ""
	for (var i = 0; i < loops; i++) {
		result += string;
	}
	return result;
}

var sum = function(array) {
	result = 0
	for (var i = 0; i < array.length; i++) {
		result += array[i];
	}
	return result;
}

var gridGenerator = function(x) {
    result = "";
	for (var i = 0; i < x; i++) {
		for (var j = 0; j < x; j++) {
			result += "# "
		}
        result += "\n"
     }
	return(result);
}
/**The above creates the expected grids w
hen console.log()ed, but not the values 
the tests show they should be returning**/

var largestTriplet = function (value) {
    for (i = value; i > 0; i--) {
        for (j = value; j > 0; j--) {
            for (k = value; k > 0; k--) {
                if (i*i == j*j + k*k) {
                    return [k,j,i];
                }
            }
        }
    }
}

var join = function(array,delimiter) {
	var string = ""
	if (delimiter) {
		for (i = 0; i<array.length; i++) {
			string += array[i];
			string += delimiter;
		}
		return string.slice(0,(string.length-1))
	}
	else {
		for (i = 0; i<array.length; i++) {
			string += array[i];
		}
	}
	return string;
}

var paramify = function(object) {
    string = ""
    for (var i in object) {
        string += i + "=" + object[i] + "&"
	}
    return string.slice(0,(string.length-1))
}

/**Did not have time to attempt the alphabetization tests but will try those later **/