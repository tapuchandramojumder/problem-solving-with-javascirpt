function compact(arr) {
return arr.filter(Boolean)
}
	
console.log( compact([0,3,1, false, 2, "", 3]))

//Another solution

// 4. Using Underscore/Lodash Library
// Similar to the Array.prototype.filter() method, Underscore and Lodash Library provide their implementation of the filter() method. You can pass any of the above callback functions to the _.filter method and get the same result.

// function compact(arr) {
// 	var _ = require('underscore');    
//  return _.filter(arr, Boolean);
// }
//    console.log( compact([0,3,1, false, 2, "", 3]))

// find the factorial of a recursion method in javascript 
// 5! = 5*4*3*2*1= 120 

function factorial(num){
if(num>=0){

    if(num ==0){
        return 1 ;
    }
    return num *factorial(num-1)
}  
console.log("number in less than 0")
}
console.log(factorial(-2))


const  babyBoy = ()=>{
    let babyBoy = "herat";
    if(babyBoy==='herith'){
        console.log("I don't love you")
    }else if(babyBoy ==="rose"){
        console.log("yes I love him")
    } else if (babyBoy==="herat"){
        console.log("I love my baby boy")
    }
}

babyBoy()