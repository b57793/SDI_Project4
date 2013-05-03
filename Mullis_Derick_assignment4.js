//alert("JavaScript works!");

var library = function(){



//round 2 decimal places

var decimalPlaces = function (value, decimal) {
	var number = value.toFixed(decimal); 
	return number;
};






//Verify pattern for email address
	
var emailVerify = function(email) {
		var address = email;
		var atSymbol = address.indexOf("@");
		var dotSymbol = address.lastIndexOf(".");
		if( atSymbol === -1 || dotSymbol === -1 || (atSymbol+2) >= dotSymbol ) {
			return (false);
		} else {
			return (true);
		};return
};
	
	
//This fold is failed code for the email
//	var mainSplit = email.split("@");
//	var split2 = mainSplit[1].split(".");
//	var mainLength = mainSplit.length;
//	var emailBeginning = mainSplit[0];
//		console.log("Is this it? " + emailBeginning);	
	
//	var leftSide = function(mainSplit) {					// make sure to pass in whole array before typeof function is called
//		if (typeof emailBeginning === 'string') {
//			return (true);
//			} else {
//			return (false);
//		};  
//	};
//};

	
//		if (typeof(split2[1]) === 'string') {
//		return (true);
//		} else {
//		return (false);
//		};
//	};	

//	var isDotComNumber = function(split2) {
//		if (typeof(split2[1] === 'number')) {
//			return (true);
//			} else {
//			return (false);
//		};
//	};
	
//	if ( leftSide === true ) { //&& dotComValid === true && isDotComNumber === false) {
//		return (true);
//		} else {
//		return (false);
//	};
//};







//Convert a string into a number value
	var numberConvert = function (string1, string2) {
		var conversion1 = Math.floor(string1)
		var conversion2 = Math.floor(string2)
		return (conversion1 + conversion2);	
};







//Replace a separator
	var replaceSeparator = function(string, separator, replacement) {
			var stringReworked = string.split(separator).join(replacement);
			return stringReworked

//Failed code for separator
//			var stringReplaced = stringSplit.join(replacement) 
//			var replacedString = function (stringSplit) {
//				for (var i=0; i <= stringSplit.length; i++) {
//				    	if (stringSplit[i] == seperator);
//      					(stringSplit[i] == replacement);
//        				return stringSplit[i];
//				};	
//			};
};








//URL String Validate
 
 var verifyLink = function(link) {
 	var http = link.substring(0, 7);
 	var https = link.substring(0, 8);
 	var options = ["http://", "https://"];
 	
 	if ( http === options[0] || https === options[1]) {
 		return true;
 		} else {
 		return false;
 	};
 };







//Title Case a string ****NOT WORKING****

var upperCase = function (caseString) {
	var seperateWords = caseString.split(" ");
	
	var theFunction = function(seperateWords) {
		for ( var i = 0; i <= seperateWords.length; i++ ) {
			seperateWords[i] = "Updated String: " + seperateWords[i].charAt(0).toUpperCase() + seperateWords[i].substring(1);
		};
	};
}; 
	







// Pattern recognition for phone number

var phoneNumber = function(number) {
	var section1 = number.substring(0, 2);
	var section2 = number.substring(4, 6);
	var section3 = number.substring(8, 11);
		if ( section1 >= 9 && section2 >= 9 && section3 >= 9 && number.charAt(3) === "-" && number.charAt(7) === "-") {
			return (true);
		} else { 
			return (false);
		};
};		
	
			



	return {
		"phoneNumber": phoneNumber,
		"decimalPlaces": decimalPlaces,
		"emailVerify": emailVerify,
		"verifyLink": verifyLink,
		"upperCase": upperCase,
		"replaceSeparator": replaceSeparator,
		"numberConvert": numberConvert
	};

};	






//global variable

var newLib = new library();





//Main Code


console.log("Is this a valid phone number? " + newLib.phoneNumber("555-555-5555"));
console.log("This number will always have specific decimal places: " + newLib.decimalPlaces(342.2353242, 5));
console.log("Is this a valid email address? "+ newLib.emailVerify("dmullis5@fullsail.edu"));
console.log("Is this link valid? " + newLib.verifyLink("https://codeishard.com"));
//console.log("This string has been cased: " + newLib.upperCase("time management is key"));   **Non functional
console.log("This is a replaced separator: " + newLib.replaceSeparator("this,is,sparta!", ",", "/"));
console.log("This string as been converted to number: " + newLib.numberConvert("50", "50"));
