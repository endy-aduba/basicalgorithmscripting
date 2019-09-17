// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.
function bouncer(arr) {
    let brandnewarr = [];
    // Don't show a false ID to this bouncer.
    for(let i=0;i<arr.length;i++){
        if(!(Boolean(arr[i]) == false)){
            brandnewarr.push(arr[i]);
        }
        else{
            continue;
        }
    }
    return brandnewarr;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));