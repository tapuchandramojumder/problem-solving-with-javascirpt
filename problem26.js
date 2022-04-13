// count the string of letter 

const str = 'I love  javascript'

function countString(str){

    let strCount = {};

    for(let i = 0;i<str.length; i++){
        if(str[i]!==" " ){
            const lowerCase = str[i].toLowerCase();
        if(strCount[lowerCase]>0){
            strCount[lowerCase]++
        }else{
            strCount[lowerCase]=1
        }
        }
        
    }
    return strCount;
}

console.log(countString(str))