// 06_Functional 

//doubler function (test 1)
var doubler = function(x){
	return x * 2;
}

//map function (tests 2-3)
var map = function(arr, mapFunc){
	var mappedArr = [];
	for (i = 0; i < arr.length; i++){
		mappedArr[i] = mapFunc(arr[i])
	}
	return mappedArr;
}

//filter function (tests 4-5)
var filter = function(arr, filterFunc){
	var filteredArr = [];
	for (i = 0; i < arr.length; i++){
		if (filterFunc(arr[i]) === true){
			filteredArr.push(arr[i])
		}
	}
	return filteredArr;
}

//contains function (test 6-7)
var contains = function(array, containVal){
	for (item in array){   
		if (array[item] === containVal){
			return true;
		}
	}
	return false;
}
//NOTE: For this one I used a differnet "for" loop
//to account for the use of arrays AND objects as
//parameter.

//countWords function (test 8)
var countWords = function(string){
	var wordCount = 0;
	for (i = 0; i < string.length; i++){
		if (string[i] === " "){
			wordCount += 1;
		}
	}
	return wordCount + 1;
	//The +1 is to account for the fact that there will
	//not be a space after the last word. I'm sure there
	//is a more elegant way to do this, any suggestions
	//would be much appreciated.
}

//reduce function (tests 9-10)
var reduce = function(arr, startVal, reducerFunc){
	var currentVal = startVal;
	for (i = 0; i < arr.length; i++){
		currentVal = reducerFunc(currentVal, arr[i]);
	}
	return currentVal;
}

// //sums an array using reduce (test 11)
// var countWordsInReduce = function(currentVal, arr){
// 	var currentVal = 0;
// 	for (i = 0; i < arr.length; i++){
// 		currentVal += countWords(arr[i]);
// 	}
// 	return currentVal;
// }


//every function (tests 12-14)
var every = function(arr, everyFunc){
	//Need to handle empty arr case.
	for (i = 0; i < arr.length; i++){
		if (everyFunc(arr[i]) != true){
			return false;
		}
	}
	return true;
}

//any function (tests 15-17)
var any = function(arr, anyFunc){
	for (i = 0; i < arr.length; i++){
		if (anyFunc(arr[i]) === true){
			return true;
		}
	}
	return false
}
//The above isn't working for the all odd array case when
//isEven is the anyFunc. Not sure why.
