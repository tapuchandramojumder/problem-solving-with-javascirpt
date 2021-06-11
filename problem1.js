// You get an array of numbers as input, return the sum of all of the positives ones as output.
// Example: input=> [1,-4,7,12] ; output => 1 + 7 + 12 = 20
// Test Cases: Insert these as function parameter to test: [1,2,3,4,5],
//  [1,-2,3,4,5], [1,-4,7,12], [], [-1,-2,-3,-4,-5], [-1,2,3,4,-5]
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr){
    let sum = 0;
    let negativeArr=[];
    for(let i =0; i<arr.length;i++){
        let element = arr[i];
        if(element<0){
            negativeArr.push(element);
        }else{
            sum = sum+element;
        }
    }
    return sum;
}
// console.log(positiveSum([1,3,7,-15]));

function positivesSum2(arr){
   return arr.filter(x=>x>0).reduce((a,b)=>a+b,0)
}
let myResult = positivesSum2([-1,-2,4,-5])
// console.log(myResult)


function positiveSum3(arr){
    let total =0;
    arr.forEach(function(i){
        if(i>0){
            total = total +i
        }
    })
    return total;
}
console.log(positiveSum3([1,3,7,-15]));
