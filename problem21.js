// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
//  Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
function destroyer(arr) {
  var args = Array.from (arguments)
  var target = args.slice(1);
  var result = [];
  for(let i = 0;i<arr.length;i++){
    var num = arr[i];
    if(target.indexOf(num)===-1){
      result.push(num)
    }
  }
    return result;
  }
  
 console.log( destroyer([1, 2, 3, 1, 2, 3], 2, 3));