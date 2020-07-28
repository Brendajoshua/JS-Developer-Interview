/*Pseudocode
1. Have two loops
2. create a new array variable "newArr"
3. Create a loop boolean
4. Iterate through each item in the  given array
5. If item is not an array it's pushed to the "newArr"
6. Otherwise run inner loop and push item the item "j" into "newArr"
7. loop is set to true
8. if loop is true out of the outerloop 
9. Call the "flattenArray" recursively until all items checked are not arrays && loop is false.
10. Convert "newArr" to string to match the expected output*/

const flattenArray = (arr)=> {
	let newArr = [];
	let loop = false;
	for (var i = 0; i < arr.length; i++){
		if (!Array.isArray(arr[i])){
			newArr.push(arr[i]);
		} else {
			for (var x = 0; x < arr[i].length; x++){
				newArr.push(arr[i][x]);
			};
			loop = true;
		};
	};	
	if (loop) {
		return flattenArray(newArr);
	} else {
		return newArr.toString();
	};
}