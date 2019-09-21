// //Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
function mutation(arr) {
  let no2 = arr[1].toString().toLowerCase();
  let no3 = arr[0].toString().toLowerCase();
  arr.pop(); arr.pop();
  arr.push(no3); arr.push(no2);
     arr1 = [];
     arr2 = [];
     arr3 = [];
     arr1 = arr[0].split("");
     arr2.push(arr[1]);
     let newarr = arr[1].split("");
     for(let x = 0; x < newarr.length; x++){
       if(arr1.includes(newarr[x]) == true){
         arr3.push(1);
     }
      else{
       arr3.push(0);
      }
     }
     if(arr3.includes(0) == true){
       return false
     }
     else return true;
  }
  
  console.log(mutation(["Mary", "Army"]));