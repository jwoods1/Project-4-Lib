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
var cellNumb = function (myString) {
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
console.log(cellNumb(phoneNumber));
console.log('hello!')


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
				if (address.length - address.lastIndexOf(".") > 2) {
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
	};
};
console.log(emailValidation("Jwoods1@fullsail.edu"));

