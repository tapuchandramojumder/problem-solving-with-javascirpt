// finde the lowest and higest temperature in an array and 
// return higest temperature - lowest temperature;

const temperature = [2,4,-5,25,'string',false,36,-1,18]

function findTemperature(arr){
    let heigestTemp = arr[0];
    let lowestTemp = arr[0]
    for(let i = 0;i<arr.length;i++){
        if(typeof arr[i]!=='number') continue;

        if(heigestTemp<arr[i]){
            heigestTemp = arr[i]
        } 
        if(lowestTemp>arr[i]){
            lowestTemp = arr[i]
        }
       
    }
    console.log(`heightTemperature : ${heigestTemp} and lowestTemperature : ${lowestTemp}`)
    return heigestTemp - lowestTemp;
}
console.log(findTemperature(temperature))


// first we need to declare lowest variable
// secont we need to declare heigest variable
// remove falsy value in an array 
