/*	c. Print a pyramid pattern, if the input is 3 then the output
 should be similar to the given output
	     *
	    ***
 	   *****     */         
const n=4;
for(let i=0;i<n;i++){
	for(let j=0;j<(2*n-1);j++){
		if(j>=n-(i+1) && j<=n-(1-i)){
			process.stdout.write("*");
		}
		else{
			process.stdout.write(" ");
		}
	}
	console.log();
}	  