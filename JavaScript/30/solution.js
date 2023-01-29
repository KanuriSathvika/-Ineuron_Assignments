//  30. Create a simple calculator program in JavaScript which can perform the addition, 
// substraction, multiplication and division on given numbers.

const prompt=require("prompt-sync")();
const a=prompt("Enter the number:");
const b=prompt("Enter the number:");
const operator=prompt("Enter the operation:");
if(operator=='+'){
    const sum=a-(-b);
    console.log(a,'+',b,'=',sum);
}
else if(operator=='-'){
        console.log(a,'-',b,'=',(a-b));
}
else if(operator=='*'){
    console.log(a,'*',b,'=',(a*b));
}
else if(operator=='/'){
    console.log(a,'/',b,'=',(a/b));
}
