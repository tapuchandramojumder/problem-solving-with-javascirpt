 // Find the Longest Word length in a String 

 function findLongestWL(str) {
   let wordArr = str.split(' ');// first convert in an array 
    let logestWord = 0;
    for (let i = 0; i < wordArr.length; i += 1) {
      let count = wordArr[i];
      if (count.length > logestWord) {
        logestWord = count.length;
      }
    }
    return logestWord;
 }
//  console.log(findLongestWL("The quick brown fox jumped over the boxWagon lazy dog"))

// ans no 2 use reduce function 
function logestWordLength(str){
    let wordArr = str.split(' ');
    let logestWrdL = wordArr.reduce((acc,curr)=>{
      if(curr.length){
        return curr.length
      }else{
        return acc;
      }
    },0)
    return logestWrdL;
}

console.log(logestWordLength("What if we try a super-long word such as otorhinolaryngology"))