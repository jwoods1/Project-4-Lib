//alert("JavaScript works!");

/*String Functions
Does a string follow a 123-456-7890 pattern like a phone number?
This problem asks you to create a function that can accept a string and then
determine if that string follows the pattern presented. For example, if you pass
the string “123-45-67”, this would not match the pattern. But, if you passed the
string “407-695-0100”, this would match the pattern. The only value returned
from the function should be a Boolean; that is, true if the string matches the
pattern or false if it does not.
*/

var phoneNumber = "208-899-1062"
function phoneNumberValid (myString) {
if (myString.length == 12) {
	if (myString.charAt(3) == "-",myString.charAt(7) == "-") {
		return true
	}else{
		return false
	}
}else{
	return false
	}
}
console.log(phoneNumber.charAt(3));
console.log(phoneNumber.length);
console.log(phoneNumberValid(phoneNumber));



/*Does a string follow an aaa@bbb.ccc pattern like an email address?
This problem is similar to the first except that the submitted string must follow a
different pattern. For example, if you passed the string “fsosupport@fullsail", this
would not match the pattern. But, if you passed the string “llewis@fullsail.com",
this would match the pattern. The only value returned from the function should
be a Boolean; that is, true if the string matches the pattern or false if it does not.
*/
var email = "Jwoods1@fullsail.edu"
function emailValidation (address) {
	if (address.lastIndexOf("@") < address.lastIndexOf(".") ) {
		if (address.indexOf("@") > 0) {
			if (address.indexOf("@@") == -1) {
				if (address.length - address.lastIndexOf(".") <= 4) {
					if (address.length - address.lastIndexOf(".") > 2 ) {
						return true
					}else{
						return false
					}
					
				}else{
					return false
				}
			}else{
				return false
			}
		}else{
			return false
		}	 
	}else{
		return false
	};
};
console.log(emailValidation(email));

/*Is the string a URL (Does it start with http:// or https://)?
This task also involves looking at a submitted string to see if it includes the data
necessary to indicate it is a URL. Thus, you should look for the http:// or https://.
You do not have to worry if the rest of the URL is valid at this time. The only
value returned from the function should be a Boolean; that is, true if the string
matches the pattern or false if it does not.
*/

var url = "https://www.holllo.com";

function urlValidation (url) {
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
console.log(url.search("https://"));
console.log(urlValidation(url));


/*Title-case a string (split into words, then uppercase the first letter of each word).
This problem involves sending a string into the function, changing the first letter
of each word to uppercase while making sure the rest of the word is lowercase,
and then returning the string from the function so it can be output.

var myString = "john jake jason mark"
console.log(myString.split(" "));
function upperCase (string) {
	var newArray = string.split(" ");
	for (var i = 0; i < newArray[i].length; ++i) {
		newArray[i]
	};
}

console.log(upperCase(myString));

*/



