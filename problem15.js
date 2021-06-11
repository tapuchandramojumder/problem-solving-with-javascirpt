//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {


     return s.split('!').join('')
  }

   console.log(removeExclamationMarks(" al!dfkde!! "))

function removeExclamationMarks2(s) {

    let result = "";
    let arrStr = s.split("");
    // console.log(arrStr)
    for (let i = 0; i < arrStr.length; i++) {
      if (arrStr[i] == "!") {
        arrStr[i] = '';
      }
      console.log(arrStr)
    }
    for (let j = 0; j < arrStr.length; j++) {
      result += arrStr[j];
    }
    return result;

  }
//   console.log(removeExclamationMarks2("ee99efdfdk!!"))

const removeExclamationMarks3 = (s) => {
    return s.split('').filter((e) => e !== '!').join('')
  }