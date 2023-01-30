/**18. Write a program which tells the number of days in a month, now consider leap year. */

const month="Feburary";
const year=2028;  //Only leap years.

if(month=='Feburary'){
      console.log("29  days in",month,"month");
}
else if(month=='January' || month=='March'  || month=='May'  || month=='July' || month=='August' 
|| month=='October'  || month=='December'){
    console.log("31  days in",month,"month")
}
else{
    console.log("30  days in",month,"month");
}