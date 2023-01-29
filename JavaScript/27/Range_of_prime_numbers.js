/**27. Write a program to print all the prime number
 *  between 0 to 100 (0 and 100 included). */

for(let i=0;i<=100;i++){
    let count=0;
    if(i==0 || i==1){
        continue;
    }
    else if(i%2!=0){
        for(let j=2;j<=i/2;j++){
        
            if(i%j==0){
              count+=1;
              break;
            }
        }
        if(count==0){
            console.log(i);
        }
       
    }

    
}