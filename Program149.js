function SumFactors(ino)
{
   let icnt = 0;
   let iSum = 0;


   for( icnt= 1 ; icnt <= (ino/2); icnt++)
   {
    if(ino%icnt == 0)
    {
       iSum = iSum +icnt; 
      
    }
   
   }
   return iSum;
}
function main()
{
    let iRet = 0;
   iRet = SumFactors(12);
   console.log("Summation od factors:",iRet);
}
main();