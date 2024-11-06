// print n to 1 by using backtrack
function Nto1(i,n)
{
    if(i>n) return
    Nto1(i+1,n)
    console.log(i)
}
Nto1(1,3)

// print 1 to n by using backtrack
function ltoN(i,n)
{
    if(i<1) return
    ltoN(i-1,n)
    console.log(i)
}
ltoN(3,3)