//alert("JavaScript works!");




var library = function(){

//round 2 decimal places

var decimalPlaces = function (value, decimal) {
	

};

//Smallest Number in an array that is greater than the given number

var smallestNumber = function ([array], number) {
	

};

//Convert a string of numbers into a number value



// Pattern recognition for phone number

var phoneNumber = function(number) {
	var section1 = number.substring(0, 2);
	var section2 = number.substring(4, 6);
	var section3 = number.substring(8, 11);
		if ( section1 != isNaN && section2 != isNaN && section3 != isNaN || number.indexOf(3) && number.indexOf(7) === "-") {
			return (true);
		} else { 
			return (false);
		};
};		
	
			

	return {
		"phoneNumber": phoneNumber
	
	};


};	

var newLib = new library();


console.log("Is this a valid phone number? " + newLib.phoneNumber("704-221-3915"));
