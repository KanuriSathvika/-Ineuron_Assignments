/**22. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method */

const ages = [19,22, 19, 24, 20, 25, 26, 24,25,24];
//Sort the array
ages.sort();
console.log(ages);
const min=ages[0];
const max=ages[ages.length-1];
console.log("min age=",min);
console.log("max age=",max);

//Median Age
let median;
if(ages.length%2==0){
     median=(ages[ages.length/2]+ages[ages.length/2+1])/2;
}
else{
     median=ages[Math.floor(ages.length/2)];
}
console.log("Median Age=",median);

//Average Age
let sum=0;
for(let x of ages){
    sum+=x;
}
const average_age=sum/ages.length;
console.log("Average Age=",average_age);

//range of the Ages
const range=max-min;
console.log("Range of the ages=",range);

//Comapare the values
const min_avg=Math.abs(min-average_age);
const max_avg=Math.abs(max-average_age);
if(min_avg==max_avg){
    console.log("Equal");
}
else if(min_avg>max_avg){
    console.log("Greater than (max-average)");
}
else{
    console.log("Less than (min-average)");
}
