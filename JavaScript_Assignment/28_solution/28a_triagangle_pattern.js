/*a. Print a triangle pattern, if the given input is 3 
then the pattern should be similar to the given output
	   *
	   **
	   ***    */
const input=3;
for(let i=1;i<=input;i++){
    let star="";
      for(let j=0;j<i;j++){
         star=star+'*';
        //  process.stdout.write("*");
      }
      console.log(star);
}
