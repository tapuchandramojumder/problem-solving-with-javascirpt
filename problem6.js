// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of
// water per hour of cycling.
// You get given the time in hours and you need to return the number of litres
// Nathan will drink, rounded to the smallest value.
// For Example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5
// Easy one!


function litres(num){
    
    let convertLitres= num*0.5;
    let smallestValue = Math.floor(convertLitres);
    return smallestValue;
}

console.log(litres(7));