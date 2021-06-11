function nextNumber(arr){
    let breakNumber = null;

    for(let i =0;i<arr.length;i++){
        let currentNum = arr[i];// console.log(currentNum);
        let nextNumber = arr[i+1];//console.log(nextNumber);
        if(currentNum+1 !=nextNumber){
            breakNumber=nextNumber;
            break;
        }
        
    }
    return breakNumber;
}

console.log(nextNumber([  1, 2, 3, 5 ]))