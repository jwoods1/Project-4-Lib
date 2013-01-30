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

	return {
		"phoneNumberValid": phoneNumberValid,
		"emailValidation": emailValidation,
		"urlValidation": urlValidation,
		"toUpperCase": toUpperCase,
		"strReplace": strReplace,
		"decimalControl": decimalControl,
		"parseNum": parseNum
	};
	
}



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

/*Find the number of hours or days difference between two dates.
This function requires you to send three parameters. The first two will be dates
that you want to compare, and the third will be a string to determine if the
function returns hours or days. The function will then perform the math
necessary to find the difference between the two dates and return the choice of
hours or days.
*/



/*Given a string version of a number, such as “42”, return the value as an actual Number
data type, such as 42.
As you have learned, there is a difference between a number as a string data
type and a number as a Number data type. For this task, you will simply need to
send a string into the function and return it as a Number. If you want to get
creative, you also can add a conditional to determine if the string sent into the
function is a number before you do the conversion.
*/

/*Array Functions
Find the smallest value in an array than is greater than a given number.
You will need to send two items into the function. The first is an array of numbers
and the second will be a number you’ll compare to numbers within the array. You
will then return the number in the array that is the next highest number to the one
you’re using in the comparison. So, if you send the array [1,4,7,9,10,14,15] and
the number 12 into the function, it should return 14 as the next highest number.
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
/*

Given an array of objects and the name of a key, return the array sorted by the value of
that key in each of the objects: “a” + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2},{a:3}].
This function also requires you to send two argument parameters. The first one
is an array of objects and the second one is a key. The function will then sort the
array of objects by the key you send. In this case, you might send an array of
objects [{a:2},{b:3}.{a:1},{a:4}] and the key “a” which will then be sorted by the
function using the key “a” and returned as [{a:1},{a:2},{a:3},{a:4},{b:3}].
*/
