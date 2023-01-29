/**17. Write a program which tells the number of days in a month.
 */
const month="Feburary";
const year=20213;

if(month=='Feburary'){
    if(year%4==0 ||year%100!=0 && year%400==0){
      console.log("29  days in",month,"month");
}
else{
    console.log("28  days in",month,"month");
}
}
else if(month=='January' || month=='March'  || month=='May'  || month=='July' || month=='August' 
|| month=='October'  || month=='December'){
    console.log("31  days in",month,"month")
}
else{
    console.log("30  days in",month,"month");
}