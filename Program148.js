function DisplayFactors(ino)
{
   let icnt = 0;
   
   console.log("factors of ino:",ino);
   for(let icnt= 1 ; icnt <= (ino/2); icnt++)
   {
    if(ino%icnt == 0)
      {
       console.log(icnt);
      }
   }
}
   
function main()
{
    DisplayFactors(12);
}
main();