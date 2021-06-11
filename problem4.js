// You are given a set of numbers. Return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// Example: input => [1,2,3,4,5]) ; output => [-1,-2,-3,-4,-5]
//  input =>[1,-2,3,-4,5]; output => [-1,2,-3,4,-5]
// input => []; output => []
// You can assume that all values are integers. Do not mutate the input array.
// Write your code inside the function.

function invert(arr){
    let newArr= [];
    for(let i = 0; i<arr.length; i++){
        let element = arr[i]*-1;
        newArr.push(element);
    }

    return newArr;

}
// console.log(invert( [-1,-2,-3,-4,-5]))

function invert2(arr){
    let newArr =[];
    arr.forEach(function(i){
        console.log(i)
        newArr.push(-i);
console.log(newArr)
    })
    return newArr;
}
console.log(invert2([-1,-2,3,-5]))
















