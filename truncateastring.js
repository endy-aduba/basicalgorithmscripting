// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
    // Clear out that junk in your trunk
    if(str.length > num){
        let sturrvs = str.substring(0,num) + '...';
        return sturrvs;
      }
      else{
        return str;
      }
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);