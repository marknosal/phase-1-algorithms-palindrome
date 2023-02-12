function isPalindrome(string) {
  const arrayForward = string.split('')
  const arrayBackward = []
  arrayForward.map(letter => arrayBackward.unshift(letter))
  console.log(arrayForward)
  console.log(arrayBackward)
  const arrayForward2 = arrayForward.join('')
  const arrayBackward2 = arrayBackward.join('')
  console.log(arrayForward2)
  console.log(arrayBackward2)
  if (arrayForward2 === arrayBackward2) {
    return true
    console.log('true')
  } else {
    return false
    console.log('false')
  }
}

module.exports = isPalindrome;

/*
Test Cases
True [bob, wow, bottob]
false [tram, jacob, lab]
*/
/* 
  1)take input
  2)reverse input
    a) split() string into an array.
    b) copy array
    c) 
  3)if input === reversed input, return true
*/

/*
  Add written explanation of your solution here
  line 2 splits the input(string) into an array of letters
  line 3/4 taking each letter of the old array and adding them, one at a time, into the first index of the new array
*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome('jam'));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;
