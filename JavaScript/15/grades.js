/**15. Write a program which can give grades to students according to theirs scores:
    - 90-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F */
const prompt=require("prompt-sync")();    
const score=prompt("Enter the score: ");
if(score>=90 && score<=100){
    console.log("Grade: A");
} 
else if(score>=70 && score<=89){
    console.log("Grade: B");
} 
else if(score>=60 && score<=69){
    console.log("Grade: C");
}  
if(score>=50 && score<=59){
    console.log("Grade: D");
}
if(score>=0 && score<=49){
    console.log("Grade: F");
}
