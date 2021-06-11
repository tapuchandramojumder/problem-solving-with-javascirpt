//Two non-empty linked lists are given to represent two non-negative integers. Among them, their respective digits are stored in a reverse order, and each of their nodes can only store one digit.

// If we add these two numbers together, a new linked list will be returned to represent their sum.

// You can assume that except for the number 0, neither of these two numbers start with 0.

// Example:

// Input:[2 ,4, 3], [5,6,4]
// Output: [7,0,8]
// Reason: 342 + 465 = 807
//input l1=[9,9,9,9,9,9,9] , l2=[9,9,9,9]
//output [8,9,9,9,0,0,0,1]
//the number of nodes in each linked list is in the range[1,100];
const addTwoNumbers = (l1,l2)=>{
    let reversedL1Arr = Number(l1.reverse().join(""));
    let reversedL2Arr = Number(l2.reverse().join(""));
    let res = reversedL1Arr+reversedL2Arr;
    return String(res).split('').map(v=>Number(v)).reverse()
    
}
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))