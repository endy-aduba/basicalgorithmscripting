// I really dislike this one cus I spent so much more time than i was supposed to on it. Either way, I guess it's done now.

// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
function titleCase(str) {
    let str1 = str.toLowerCase();
    let words = str1.split(" ");
    for(let i=0;i<words.length;i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  
console.log(  titleCase("I'm a little tea pot"));