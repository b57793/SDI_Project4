//alert("JavaScript works!");




var library = function(){

//round 2 decimal places

var decimalPlaces = function (value, decimal) {
	var n = value.toFixed(decimal); 
	return n;
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
		if ( section1 >= 9 && section2 >= 9 && section3 >= 9 && number.charAt(3) === "-" && number.charAt(7) === "-") {
			return (true);
		} else { 
			return (false);
		};
};		
	
			

	return {
		"phoneNumber": phoneNumber,
		"decimalPlaces": decimalPlaces
		
	};

};	

var newLib = new library();


console.log("Is this a valid phone number? " + newLib.phoneNumber("704-221-3915"));
console.log("This number will always have specific decimal places: " + newLib.decimalPlaces(342.2353242, 5));