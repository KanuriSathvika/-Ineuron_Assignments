/*b. Print a square pattern, if the input is 3 then the output 
should be similar to the given output
	   ***
	   ***
	   *** */

const input=3;
for(let i=0;i<input;i++){
    for(let j=0;j<input;j++){
        process.stdout.write('*'); //this  method used to print the outputwith continuation line.
    }
    console.log();
}