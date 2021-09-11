
var students = [['David', 90], ['Vinoth', 87], ['Divya', 62], ['Ishitha', 65], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        console.log(Avgmarks)
        var avg= (Avgmarks/students.length);
        // console.log(avgTotal)
}

if (avg < 60) {
    console.log('Grade : F');
  } else if (avg < 70) {
    console.log('Grade : D');
  } else if (avg < 80) {
    console.log('Grade : C');
  } else if (avg < 90) {
    console.log('Grade : B');
  } else if (avg < 100) {
    console.log('Grade : F');
  }
  const principal = 2000;
const time = 5;
const rate = .08;
const n = 12;
const compoundInterest = (p, t, r, n) => {
   const amount = p * (Math.pow((1 + (r / n)), (n * t)));
   console.log(1+(r/n))
   console.log(n*t)
   const interest = amount - p;
   return interest;
};
console.log(compoundInterest(principal, time, rate, n));


console.log((5000*(2/100)*2))