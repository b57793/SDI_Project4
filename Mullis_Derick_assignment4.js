//alert("JavaScript works!");




var library = function(){

//round 2 decimal places

var decimalPlaces = function (value, decimal) {
	var n = value.toFixed(decimal); 
	return n;
};

//Smallest Number in an array that is greater than the given number ****NOT WORKING****

var smallestNumber = function ([array], number) {
	

};


//Verify pattern for email address ****NOT WORKING****
	
var emailVerify = function(email) {
	
	var mainSplit = email.split("@");
	var split2 = mainSplit[1].split(".");
	var mainLength = mainSplit.length;
	var emailBeginning = mainSplit[0];
		console.log(" Is this it? " + emailBeginning);	
	
	var leftSide = function(mainSplit) {					// make sure to pass in whole array before typeof function is called
		if (typeof emailBeginning === 'string') {
			return (true);
			} else {
			return (false);
		};  
	};
};

	
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


//Convert a string of numbers into a number value ****NOT WORKING****




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
		"verifyLink": verifyLink
	};

};	

var newLib = new library();


//Main Code


console.log("Is this a valid phone number? " + newLib.phoneNumber("555-555-5555"));
console.log("This number will always have specific decimal places: " + newLib.decimalPlaces(342.2353242, 5));
console.log("Is this a valid email address? "+ newLib.emailVerify("dmullis5@fullsail.edu"));
console.log("Is this link valid? " + newLib.verifyLink("https://codeishard.com"));
