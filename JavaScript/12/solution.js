/**12. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm */
const now=new Date();
const time=now.getHours()+":"+now.getMinutes();
console.log(now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate(),time);   
console.log(now.getDate()+"-"+(now.getMonth()+1)+"-"+now.getFullYear(),time);
console.log(now.getDate()+"/"+(now.getMonth()+1)+"/"+now.getFullYear(),time);