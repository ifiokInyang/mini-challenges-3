/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value){  //creating a function to convert decimal to binary
    let decimal = value;  //initialising a variable to hold the input number
    let emptystring = "" //creating an empty string variable to hold the binary that has been converted to decimal

emptystring += decimal.toString(2) //adding the converted decimal to  the empty string
let paddedString;
let reversedBinarString = ""                       //declaring an empty variable to hold the reversed binary
if (emptystring.length<=8){
paddedString = emptystring.padStart(8, '0') //declaring and initialising a variable to hold the paddedstring
} else {
    paddedString = emptystring.padStart(16, '0')
}
                       
for (let i = paddedString.length-1; i>-1; i--){ //creating a loop that counts backward from the first 
                                                // item of the padded string
     reversedBinarString += paddedString[i]                 //reassigning the variable reversedBinarString with each character of the reversed
                                            //  binary
}
return parseInt(reversedBinarString, 2)                  //returning the binary that has been converted to base 2 

}       //calling the function on specified input values
console.log(binaryReversal(213))
console.log(binaryReversal(200))
console.log(binaryReversal(4567))
module.exports = binaryReversal;
