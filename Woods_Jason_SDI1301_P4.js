//alert("JavaScript works!");
// Woods Jason
//	SDI 1301
//	Project 4
//	Function Library


var myLibrary = function(){
	//string check phone # // project 2 use of Boolean logic
	var phoneNumberValid = function(myString){
		if (myString.length == 12) {
			if (myString.charAt(3) == "-",myString.charAt(7) == "-") {
				if (isNaN(myString)) {
					if (myString.search(" ") == -1) {
						return true;
				
					}else{
						return false;
					}
				
				}else{
					return false;
				}
			
			}else{
				return false; // add is NaN and space checks
			}
		}else{
			return false;
		}
	};
	// string check Email // project 3 missing returns and use of methods
	var emailValidation = function(address) {
		if (address.lastIndexOf("@") < address.lastIndexOf(".") ) {
			if (address.indexOf("@") > 0) {
				if (address.indexOf("@@") == -1) {
					if (address.length - address.lastIndexOf(".") <= 4) {
						if (address.length - address.lastIndexOf(".") > 2 ) {
							if(address.search(" ") == -1 ) {
								return true;
							}else{
								return false;
							}
								
						}else{
							return false;
						}
										
					}else{
						return false;
					}
				}else{
					return false;
				}
			}else{
				return false;
			}	 
		}else{
			return false;
		};
	};
	// check url
	var urlValidation = function(url) {
		if (url.contains("https://") || url.contains("http://")) {
			if (url.startsWith("https://") || url.startsWith("http://")) {
				return true
			} else{
				return false 
			}
		}else{
			return false
		}
	};
	// string to uppercase and lower case
	var toUpperCase = function(string) {
		newStr = "";
		newArr = string.split(" ");
		for(var i = 0; i < newArr.length ; i++){
			newArr[i] = newArr[i].toLowerCase();
			};
		for(var i = 0 ; i < newArr.length ; i++){
    		newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1);
    	};
    
		newStr = newArr.join(" ");
		return newStr;
	};
	// replace string 
	var strReplace = function(str,a,b) {
		do{
			str = str.replace(a,b);
		} while(str.indexOf(a) !== -1);
		return str;
	};
	// Decimal place controler
	var decimalControl = function(num,numDec) {
		var n = num.toFixed(numDec);
		return n;
	};
	// String to Number
	var parseNum = function(str) {
		if (isNaN(str) == true) {
			return "Not a number!";
		} else{
			return parseInt(str);
		};
	};
	// Dates differences
	var diffDates = function(date1,date2,format) {
		
		var oneday =1000*60*60*24;
		var date1ms = date1.getTime();
		var date2ms = date2.getTime();
		var differencems = date2ms - date1ms;
		
		if(format == "days"){
		return (Math.round(differencems/oneday) + "days");
		}
		if(format == "time") {
		return (Math.round((differencems/oneday)*24) + "Hrs");
		};
	
	};
		// array next highest value
	
		var arrayValue = function(arr,value){
			var arr = arr.slice(0).sort(function(a,b){return a-b;});
	
			for (var i=0; i < arr.length; i++) {
				if(arr[i] > value){
					return arr[i];
				}
			};
		};
	
	return {
		"phoneNumberValid": phoneNumberValid,
		"emailValidation": emailValidation,
		"urlValidation": urlValidation,
		"toUpperCase": toUpperCase,
		"strReplace": strReplace,
		"decimalControl": decimalControl,
		"parseNum": parseNum,
		"diffDates": diffDates,
		"arrayValue": arrayValue
	};
	
}


var myArray = [1,2,3,4,5,12,14,18,30]
var newLib = new myLibrary;
var phoneNumber = "208-899-1062";
var url = "https://www.holllo.com";
var email = "JTannner@fullsail.edu";
console.log(newLib.phoneNumberValid(phoneNumber));
console.log(newLib.emailValidation(email));
console.log(newLib.urlValidation(url));
console.log(newLib.toUpperCase("tanner aHas mAd thiS HARD"));
console.log(newLib.strReplace("a:c:d",":","/")); 
console.log(newLib.decimalControl(1234.3242345234,2));
console.log(newLib.parseNum("213"))
var now = new Date(2013, 0, 30);
var later = new Date(2013, 5, 1);
console.log(newLib.diffDates(now,later,"days"));
console.log(newLib.arrayValue(myArray,2));



/*Fuzzy-match a number: is the number above or below a number within a certain
percent?
This function confuses students the most, so please ask if you have questions.
You will send three numbers as parameters for the function. You will then
compare the first number to the second number to see if the first number is
greater than or less than the second number, and then you will use the third
number to see if the first number is within that percentage of the second number.
So, if you were to send (5, 10, 50), the function would first determine if 5 is
greater than or less than 10. It would then determine if 5 is within 50% of 10. The
function should then return the results.
*/


/*
Find the total value of just the numbers in an array, even if some of the items are not
numbers.
This one can be tricky if your array includes a string that is a number. You will
send an array into the function and have it add together the numbers in the array.
For example, if you send the array [1, “pickles”, 3, “onions”, 5, “10”, 6, “SDI”], the
function should return 15. Therefore, it should be able to recognize “10” as a
string and ignore it from the total.
*/
var addArrayNum = function(array){
	var total = 0;
	
	for(var i=0; i < array.length; i++) {
		if(!isNaN(array[i])) {
			total += array[i];
		} 
		
	}
	return total;

	
}
console.log(addArrayNum([10,"bob",2]));
/*

Given an array of objects and the name of a key, return the array sorted by the value of
that key in each of the objects: “a” + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2},{a:3}].
This function also requires you to send two argument parameters. The first one
is an array of objects and the second one is a key. The function will then sort the
array of objects by the key you send. In this case, you might send an array of
objects [{a:2},{b:3}.{a:1},{a:4}] and the key “a” which will then be sorted by the
function using the key “a” and returned as [{a:1},{a:2},{a:3},{a:4},{b:3}].
*/
var keyArray = function(array,key){

}



