function checkPrime(number){

  let count_factors=0;

    for(let i=1;i<=number;i++)
        {
        if(number%i==0)
         {
           count_factors++;
         }
        }
   if(count_factors==2)
      {
         return true;
        }
      return false;
   }

    let answer=checkPrime(41);
    if(answer==true)
       {
          console.log("Prime number");
       }
     else{
        console.log("Not a Prime number");
      }