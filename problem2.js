// You are given a string of digits as input, you should replace any withdigit below 5  '0' and any digit 5 and above with '1'. 
// Return the result in a string.
// Example: input=> '45385593107843568' ; output => '01011110001100111'
// Test Cases: '509321967506747' , '366058562030849490134388085' , '45385593107843568'
// Write your code inside the function.
function fakeBin(x){
    let result = "";

    for(let i= 0;i<x.length; i++){
        let element = x[i];
        if(element<5){
            element = 0
            result = result + element;
        }else if(element>=5){
            element = 1
            result = result + element;
        }
    }
    return result;
}
// console.log(fakeBin("85593107843568"));

function fakeBin2(x){
    let arr = [...x] ;
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        let num = arr[i];
        num<5?num=0:num=1;
        newArr.push(num);
    }
    return newArr.join("");
}
// console.log(fakeBin2("93107843568"));

// solution no 3;
const str = "9547989654124";
const fakeBin3 = (x)=>x.split('').map(x=>x<5?'0':'1').join(''); 

console.log(fakeBin3(str));