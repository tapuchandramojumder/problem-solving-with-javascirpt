// Your task is to write a function findSum .
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
// Example: input => findSum(5); output => 8 // (3+5)
// input => findSum(10); output => 33 // (3+5+6+9+10)
// Write your code inside the function.

function findSum(n){
    let sum = 0 ;
    for(let i=0;i<=n;i++){
        if(i%3==0 || i%5==0){
            // console.log(i)
            sum= sum+i
            
        }
    }
    return sum;
}
//console.log(findSum(18))
function findSum2(n){
let newArr =[];
for(let i= 0;i<=n; i++){
    if(i%3==0|| i%5==0){
        newArr.push(i);
    }
}
    return newArr.reduce((a,b)=>a+b,0)
}
console.log(findSum2(10))
























