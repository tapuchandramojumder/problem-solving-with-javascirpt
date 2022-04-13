function decToBinRrcv(num){
   if (num>=1){
       return decToBinRrcv(Math.floor(num/2))+(num%2)
   }
   return ""
}
console.log(decToBinRrcv(21))

//decimal to binary recursive except

function decimalToBinary(num){
    if(num>0){
        return console.log( decimalToBinary(Math.floor(num/2)) + (num%2))
    }
    return ""
}
// console.log(decimalToBinary(21))
decimalToBinary(21) 