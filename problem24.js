console.log("moga mama")
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
  