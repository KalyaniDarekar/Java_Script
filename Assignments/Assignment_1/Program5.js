function CheckDivisible(iNo)
{
    if ((iNo %5) ==0)
    {
        console.log("Number is Divisible by 5");
    }
    else 
    {
        console.log("Number is Not Divisible by 5");
    }
    
}
function main()
{
    CheckDivisible(13);
}
main();