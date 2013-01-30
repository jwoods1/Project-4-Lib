//alert("JavaScript works!");
// Woods Jason
//	SDI 1301
//	Project 4
//	Function Library

/*String Functions
Does a string follow a 123-456-7890 pattern like a phone number?
This problem asks you to create a function that can accept a string and then
determine if that string follows the pattern presented. For example, if you pass
the string “123-45-67”, this would not match the pattern. But, if you passed the
string “407-695-0100”, this would match the pattern. The only value returned
from the function should be a Boolean; that is, true if the string matches the
pattern or false if it does not.
*/
var myLibrary = function(){
	//string check phone #
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
	// string check Email
	var emailValidation = function(address){
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
										/// add Space check
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
	var urlValidation = function(url){
		if (url.contains("https://") || url.contains("http://")) {
			if (url.startsWith("https://") || url.startsWith("http://")) {
				return true
			} else{
				return false // add space check
			}
		}else{
			return false
		}
	};

	return {
		"phoneNumberValid": phoneNumberValid,
		"emailValidation": emailValidation,
		"urlValidation": urlValidation 
	};
};


var newLib = new myLibrary;
var phoneNumber = "208-899-1062";
var url = "https://www.holllo.com";
var email = "Jwoods1@fullsail.edu";
console.log(newLib.phoneNumberValid(phoneNumber));
console.log(newLib.emailValidation(email));
console.log(newLib.urlValidation(url));

/*Does a string follow an aaa@bbb.ccc pattern like an email address?
This problem is similar to the first except that the submitted string must follow a
different pattern. For example, if you passed the string “fsosupport@fullsail", this
would not match the pattern. But, if you passed the string “llewis@fullsail.com",
this would match the pattern. The only value returned from the function should
be a Boolean; that is, true if the string matches the pattern or false if it does not.
*/




/*Is the string a URL (Does it start with http:// or https://)?
This task also involves looking at a submitted string to see if it includes the data
necessary to indicate it is a URL. Thus, you should look for the http:// or https://.
You do not have to worry if the rest of the URL is valid at this time. The only
value returned from the function should be a Boolean; that is, true if the string
matches the pattern or false if it does not.
*/





/*Title-case a string (split into words, then uppercase the first letter of each word).
This problem involves sending a string into the function, changing the first letter
of each word to uppercase while making sure the rest of the word is lowercase,
and then returning the string from the function so it can be output.
*/
/*var myString = "john jake jason mark"
console.log(myString.split(" "));
function upperCase (string) {
	var newArray = string.split(" ");
	for (var i = 0; i < newArray[i].length; ++i) {
		newArray[i]
	};
}

console.log(upperCase(myString));

*/


//revealing module pattern




/*Given a string that is a list of things separated by a given string, as well as another
string separator, return a string with the first separator changed to the second: “a,b,c” +
“,” + “/” --> “a/b/c”.
For this problem, you will need to send three arguments into your function. The
first is the string with items separated by a separator (such as a comma). The
second is the separator that is being replaced. The third parameter is the
separator you are going to use in place of the original. Thus, if you send the
parameters (“a,b,c”, “,”, “/”), the function should return the string as “a/b/c”.
*/
var separator = "c,b,a"
var replace = separator.replace(",", "/");
	

console.log(replace); 
/*
Number Functions

Format a number to use a specific number of decimal places as for money: 2.1 --> 2.10.
This function will require two parameters. The first is the number you wish to
change, and the second is the number of decimal places you wish to use to
format the number. For example, to format pi to three decimal places, you might
send the following argument parameters: (3.14159, 3). The function will then
return 3.142.
*/
function decimalControl (numb,numDec) {
	var num = numb
	var n = num.toFixed(numDec);
	return n
	
};

var cash = decimalControl(4.13223423523526,3);
console.log(cash);
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


