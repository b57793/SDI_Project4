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
	
var emailVerify = function (email, seperator) {
	var atSplit = email.split(seperator); 
	var leftSide = atSplit[0].split("");
	var rightSide = atSplit[1].length;
	var leftSideCheck = leftSide.indexOf("@");
	var rightSideSplit = atSplit[1].split("");
	var rightSideCheck = function (rightSideSplit) {
		for (i=0; i <= rightSideSplit.length; i++) {
			if (typeof[i] === 'number') {
				return (true);
				} else { 
				return (false);
			};
		};
			if (leftSideCheck >= 0 && rightSide === 3 && rightSideCheck === false ) {
				return (true);
			} else { 
				return (false);
			};
	};
		
};


//	while ( atSplit != "@" ) {
//	for (var verify = "@"; atSplit = verify; verify++) {
//		var isEmail = atSplit
//		if (isEmail = "@") {
//		if	([atSplit] = "@") {
//			return true;
//		} else {
//			return false;
//		};	
//	}; 



//Convert a string of numbers into a number value ****NOT WORKING****




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
		"emailVerify": emailVerify
	};

};	

var newLib = new library();


console.log("Is this a valid phone number? " + newLib.phoneNumber("704-221-3915"));
console.log("This number will always have specific decimal places: " + newLib.decimalPlaces(342.2353242, 5));
console.log("Is this a valid email address? "+ newLib.emailVerify("dmullis5@fullsail.edu","."));