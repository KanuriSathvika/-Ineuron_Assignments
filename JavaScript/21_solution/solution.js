/**21. In countries array check if 'Ethiopia' exists in the array if it exists 
 * print 'ETHIOPIA'. If it does not exist add to the countries list.
 */

const country=['India','china','USA','Russia','Japan','Singapore'];
if(!country.includes('Ethiopia')){
    country.push("Ethiopia");
    console.log("After adding 'Ethiopia'. countries list=",country);
}
else{
    console.log(country);
}