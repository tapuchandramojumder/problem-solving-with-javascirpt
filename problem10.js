// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
	 let count = 0;
     for(let i = 0;i<arr.length;i++){
         if(arr[i]===true){
            count++;
         }
    
     }
     return count;
}
console.log(countTrue([false, false, false, false]))


//anther solution

function countTrue2(arr){
    let count = 0;
    arr.map((value)=>{
        if(value==true){
            count++
        }

    })
    return sum;
}

const countTrue3 =(arr)=>{
    return !arr.length?0:arr.filter(v=>Boolean(v)).length;
}
console.log(countTrue3([false, true,true,true,false,true, false, false]))
