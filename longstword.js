/*

Basic Algorithm Scripting: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
function findLongestWordLength(str) {
    let news = str.split(' ');
    let num = 0;
    for(var p=0;p<news.length;p++){
      var shape = news[p].length;
      if(shape > num){
        num = shape;
      }else{
        continue;
      }
    }
    return num;
    }