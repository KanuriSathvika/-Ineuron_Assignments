/**11. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now. */

const now=new Date();
console.log("The year today=",now.getFullYear());
console.log("The month today as a number=",now.getMonth());
console.log("The date today=",now.getDate());
console.log("The day today as a number=",now.getDay());
console.log("The hours now=",now.getHours());
console.log("The minutes now=",now.getMinutes());

const info=new Date(2023,0,27);
console.log("The numbers of seconds elapsed from January 1, 1970 to now=",(now-info)/1000);