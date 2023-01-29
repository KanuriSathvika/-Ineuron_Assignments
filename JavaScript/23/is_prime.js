/**23. Write a program to check that the number given by the 
 * user is a prime number or not.
 */

const prompt=require("prompt-sync")();
function isprime(num){
    if(num==0 || num==1){
        return (num+" is not a Prime.");
    }
    else{
        for(let i=2;i<=num/2;i++){
               if(num%i==0){
                return (num+" is not a prime.");
               }  
        }
    }
    return (num+" is a Prime.");
}
const num=prompt("Enter the number:");
console.log(isprime(num));