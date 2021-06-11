// We want to generate a function that computes the series starting from 0 and ending until the given number.
// Example: input: 6; output: "0+1+2+3+4+5+6 = 21"
// Notes:
// if the given number is 0, then the output should be "0=0"
// if the given number is smaller then 0, then the output should be
//  input: -15; output:  "-15<0"
// Write your code inside the function.
function showSequence(count){
  let sum = 0 ;
  let arr =[];
  if(count<0){
      return `${count}<0`;
  }
  else if(count ===0){
      return `${count}=0`;
  }
  else{
      for(var i = 0; i<=count; i++){
        sum=sum+i;
        //console.log(sum)
         arr.push(i);
        //  console.log(arr)
      }
    return `${arr.join("+")} = ${sum}`;
  }
  
}
//  console.log(showSequence(9))
function showSequence2(num){
    if(num<0){
        return num +"<0"; 
    }
    else if (num===0){
        return num +"=0"
    }
    let sum ="";
    let total = 0;
    for(i = 0 ; i<=num;i++){
        let element = i;
        total= total + element;
        console.log(total)
        sum = sum +"+"+element;
    }
    return sum = sum +"="+total;
}
//  console.log(showSequence2(10))


let arr = [1,2,3,4,8,5,4,3,8,7,4,2];
let unique = [];
for(let i = 0;i<arr.length;i++){
    let number = arr[i];
    let indexCheck = unique.indexOf(number);
    console.log("index no:", indexCheck)
    if(indexCheck===-1){
        unique.push(number)
    }
   
}
console.log(unique)






























// console.log(arr ===arr2)
// console.log(arr ==str)
// console.log(String(arr))

// console.log(typeof(arr))
// console.log(typeof(str))