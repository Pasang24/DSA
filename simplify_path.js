import Stack from "./stack.js";

// this problem requires us to convert a path into it's simple form
// eg : /user/..//desktop/ -> /desktop

// function to simplify the path
function simplifyPath(path) {
  let length = path.length;
  let stack = new Stack(length);

  let simplifiedPath = "";

  for (let i = 0; i < length; i++) {
    // if we see any slash in the path then we ignore it
    if (path[i] === "/") continue;
    // else if we find a dot then we further check if its a single, double or triple dot
    else if (path[i] === ".") {
      let value = "";
      // we iterative inside the loop to see how many dots we can find and store it in variable
      while (path[i] === ".") {
        value += ".";
        i++;
      }
      // if there is only one dot then it means we are in the current directory and don't need to do anything
      if (value === ".") continue;

      // if it's a double dot then we need to check our stack and pop out the recent value from it
      if (value === "..") {
        // first we check if the stack is empty or not. We pop out only if it's not empty
        if (stack.isEmpty()) continue;
        stack.pop();
      }
      // if there is three dots then it means it is a value and needs to be pushed in the stack
      else {
        stack.push(value);
      }
    }
    // if we neither find a / or . then it means it's a directory name so we find the full name of the directory
    else {
      let value = "";
      // we iterate inside the loop until we find a / or reach the end of string to find the directory name
      while (path[i] !== "/" && i < length) {
        value += path[i];
        i++;
      }
      // after we find the directory name we push it in the stack
      stack.push(value);
    }
  }

  // we concat all the values from last to first along with a slash(/) till all the stack is empty
  while (!stack.isEmpty()) {
    simplifiedPath = "/" + stack.pop() + simplifiedPath;
  }

  // if the simplifiedString turned out to be a empty string we return slash(/) which means the root path
  return simplifiedPath === "" ? "/" : simplifiedPath;
}

console.log(simplifyPath("/a/b/c/../../")); // Output: "/a"
console.log(simplifyPath("/a/./b/../../c/")); // Output: "/c"
console.log(simplifyPath("/a//b////c/d//././/..")); // Output: "/a/b/c"
console.log(simplifyPath("/a/b/c/../../../x/y")); // Output: "/x/y"
console.log(simplifyPath("/a/./b/../../c/")); // Output: "/c"
console.log(simplifyPath("/../")); // Output: "/"
console.log(simplifyPath("/home//foo/")); // Output: "/home/foo"
console.log(simplifyPath("/...")); // Output: "/..."
console.log(simplifyPath("/a/..")); // Output: "/"
console.log(simplifyPath("/a/./b/./c/./d/")); // Output: "/a/b/c/d"
