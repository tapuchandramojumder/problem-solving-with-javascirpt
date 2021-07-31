// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
// // ans no 1
function remove(s){
    // use regex 
    // return s.replace(/\?/g, '');
    let result = s;
    while(result[result.length-1]==="!"){
        result=result.slice(0,-1);
    }
    return result;
}

// ans no 2
function remove1(s){
    let result = "";
    let arr = s.split("");
   //  console.log(arr)
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==="!"||""){
            arr[i]="";
        }   
    }

    for(let j=0;j<arr.length;j++){
        result = result +arr[j]
       //  console.log(result)
    }
    return result;
}

// ans on 3 if remove one or more symbol
function reomve2(s){
    let result = "";
    for(let i = 0;i<s.length;i++){
        if(s[i]==="!"){
            s[i]=""
        }
        else if(s[i]==="?"){
            s[i]='';
        }else{
            result = result + s[i]
        }
    }
    return result;
}
// ans on 4 , if 
function remove3(s){
    return s.split( '?').join('')
    
    //if remove more symbole like ('!') then need aother return;
    //res.split('!').join('');
}
console.log(remove(" hugo !jadu? ?modhu! kodhu!"))