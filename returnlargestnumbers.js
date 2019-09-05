//Basic Algorithm Scripting: Return Largest Numbers in Arrays
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function largestOfFour(arr) {
    // You can do this!
    let newarr = [];
    for(let i=0;i<arr.length;i++){
      let num =-100;
      for(let p=0;p<arr[i].length;p++){
        if(num<arr[i][p]){
          num = arr[i][p];
        }
        else{
          continue;
        }
      }
      newarr.push(num);
    }
    return newarr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);