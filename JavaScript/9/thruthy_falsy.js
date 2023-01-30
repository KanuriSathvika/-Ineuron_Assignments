/**09. Boolean value is either true or false.
    - Write three JavaScript statement example which provide truthy value.
    - Write three JavaScript statement example which provide falsy value. */
    
// Truthy and flasy values
let a=12;
let b=14;
let ans;
if(b-a==2){
    ans=true;
}
else{
    ans=false;
}
console.log(ans);
// 2
let arr=[2,4,5,7];
if(arr.length!=6){
    console.log(false);
}
else{
    console.log(true);
}


// 3
let name="javascript";
if(name==="javascript"){
    console.log(true);
}
else{
    console.log(false);
}
