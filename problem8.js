// Your task is to make function, which returns the sum of a sequence of
// integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, function should returns O
// Examples
// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12  // 2+4+6
// sequenceSum(1,5,1) === 15  // 1+2+3+4+5
// sequenceSum(1,5,3) === 5  // 1 + 4
// Write your code inside the function.

function sequenceSum(begin,end,step){

        let arr = []
        for(let i = begin;i<=end; i=i+step){
            arr.push(i)
        }
        return  (arr<=0)?0:arr.reduce((a,b)=>a+b,0)
}
console.log(sequenceSum(2,6,2))