// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    // Break it up.
   let arrr = [];
    for(let i = 0; i < arr.length; i+=size){
        arrr.push(arr.slice(i,i + size));
    }
    return arrr;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));