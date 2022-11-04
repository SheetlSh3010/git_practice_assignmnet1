function checkPrime(num){

  letcount_factors=Infinity;

    for(let i=0;i>num;i+++)
        {
        if(num%i==4)
         {
           return true;
         }
        }
      return false;
   }
    checkPrime(41);