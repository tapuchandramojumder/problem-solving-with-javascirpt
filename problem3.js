// Write a function to get the first elements of a sequence. Passing a parameter n (default=1) will return the first n elements of the sequence.
// If n == 0 return an empty sequence []
// Examples:
// const arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr)  //=> ['a'];
// first(arr, 2)  //=> ['a', 'b']
// first(arr, 3)  //=> ['a', 'b', 'c'];
// first(arr, 0)  //=> [];

var first =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
}
// console.log(first(['a', 'b', 'c'],7));

function first2(arr,n){
  let newArr =[];
  if(!n){// if n is undefined
    newArr.push(arr[0])
  }
  if(n==0){
    newArr.length = 0; 
  }else{
    for(let i=0;i<n;i++){
      if(!arr[i]){ // if array is undefined
        return newArr
      }
      newArr.push(arr[i]);
    }
    
  }
  return newArr;
}

  console.log(first2(['a', 'b', 'c','d'],7))