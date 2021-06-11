//  You are asked to square every digit of a number and
// concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 9 is 81 and 1 is 1.
// Example: input=> 3212 ; output => 9414
// Test Cases: 3212 , 2112 , 0, 77987, 9898, 777987, 6479846
// Write your code inside the function.

function squareDigits(num){

    let string = num.toString();
    let arr = string.split("")
    // console.log(arr)
    let sum = "";
    
    for(let i = 0;i<arr.length;i++){
        let element = arr[i];
       let square = element*element;
       sum = sum+square;
    }
    return Number(sum);
}
console.log(squareDigits(9119));

function squareDigits2(num){
    let[number,newArr]=[num.toString(),[]];
    number.split("").forEach((i)=>{
        newArr.push(Math.pow(i,2));
    })
    return Number(newArr.join(""));
}
console.log(squareDigits2(3256))