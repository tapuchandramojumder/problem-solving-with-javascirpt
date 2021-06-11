// sum all number in a range
// You need to create a program that will take an array of two numbers who are not necessarily in order, 
// and then add not just those numbers but any numbers in between. 
// the lowest number will not always come first
// For example, [3,1] will be the same as 1+2+3 and not just 3+1
// For example, [1,4] will be the same as 1+2+3+4 and not just 1+4

function sumOfAllRange(arr){
    let maxNum = Math.max(arr[0],arr[1]) // maximum value
    let minNum = Math.min(arr[0],arr[1]) // minimum value
    let sum = 0;
    for(let i = minNum; i<=maxNum;i++){
        sum = sum + i;
    }
    return sum 
}
console.log(sumOfAllRange([6,4]))
console.log(sumOfAllRange([1,6]))