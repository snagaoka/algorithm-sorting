// console.log(randomNumbers);

// Loop through array
for(i = 0; i < randomNumbers.length; i++){ 
	
	// Access num property of each index
	console.log(randomNumbers[i].num); 

	var a = randomNumbers[i].num;
	var b = randomNumbers[i+1].num;
	var higherNum = Number.NEGATIVE_INFINITY;


	// Order num values 
	if (a < b){
		// set higher value to top
		higherNum = b;
	} else {
		higherNum = a;
	}
 	

	// document.write(a);
	// document.write(', ');
	// document.write(b);
	// document.write(' ; ');

	document.write(higherNum);
	document.write(' | ');


	// Return sorted num values

	// return higherNum;
}

