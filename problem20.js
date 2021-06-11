// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4]
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].

function diffArray(arr1, arr2) {
    var newArr = [];
    let sortArr = [...arr1,...arr2];
    for(let i= 0; i<sortArr.length;i++){
      if(arr1.indexOf(sortArr[i])===-1 ||arr2.indexOf(sortArr[i])===-1){
        newArr.push(sortArr[i])
      }
    }
    return newArr;
  }
  
 console.log( diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))//[4]