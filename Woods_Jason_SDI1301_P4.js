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
	// Dates differences // project2 missing number functions
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
		// adding array numbers only // project 2 missing Array functions
	var addArrayNum = function(array){
		var total = 0;
		for(var i=0; i < array.length; i++) {
			if("number" == typeof array[i]) {
			total += array[i];
			} 
		}
		return total;
	};
	// Fuzzy Match super hard one
	var fuzzyMatch = function(value1,value2,value3){
		if(value1 >= value2){
		var value = value1 + " is greater then " + value2;
		}else if(value1 < value2){
			if(value1 <= value2 * value3) {
				var value = value1 + " is less then " + value2 + "and, "
				 + value1 + " is within " + value3 + " of " + value2;
			}else{
				var value = value1 + "is not within " + value3 + " of " + value2;
			}
		}	
		return  value;
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
		"arrayValue": arrayValue,
		"addArrayNum": addArrayNum,
		"fuzzyMatch": fuzzyMatch
	};
	
}


// json data for project 3 
var json1 = {
	"myArray": [1,2,3,4,5,12,14,18,30],
	"phoneNumber": "208-899-1932",
	"url": "https://www.holool.com",
	"email": "Jtanner@fullsail.edu"
};
// use of Global Var project 2
var newLib = new myLibrary;

console.log(newLib.phoneNumberValid(json1.phoneNumber));
console.log(newLib.emailValidation(json1.email));
console.log(newLib.urlValidation(json1.url));
console.log(newLib.toUpperCase("tanner aHas mAd thiS HARD"));
console.log(newLib.strReplace("a:c:d",":","/")); 
console.log(newLib.decimalControl(1234.3242345234,2));
console.log(newLib.parseNum("213"))
var now = new Date(1973, 3, 27);
var later = new Date(2013, 0, 31);
console.log(newLib.diffDates(now,later,"days"));
console.log(newLib.arrayValue(json1.myArray,4));
console.log(newLib.addArrayNum([10,"10",2,5,"20"]));
console.log(newLib.fuzzyMatch(5,10,1/2));


// spent lots of time on this one I can only get it to sort but not sort to a Key value.  
// Didnt do a Flow chart for this one because didnt have break down of the Flow.
var objectArraySort = function(array,key){
	
	for(var i = 0; i <array.length; i++) {
		for(var j = i; j < array.length; j++){
			if(array[i][key] < array[j]) {

				};

			}
		};	
		
	
	return array;
};

var obArray = [{a:1},{a:3},{a:5},{a:7},{b:2},{b:3},{b:6}];


console.log(objectArraySort(obArray,"b"));


