//Basic Algorithm Scripting: Repeat a String Repeat a String
//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    // repeat after me
    let loop = "";
    if(num/-1 == num){
      return ""
    }
    else{
      for(let i = 0; i < num; i++){
        loop += str;
      }
    }
    return loop;
  }
  
  repeatStringNumTimes("abc", 3);