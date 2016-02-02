//make a method that takes a number and return true, if the number is a palindrome
// feel free to use, the previous written python algorithm
// hint1: you can compare numbers as strings, by number convert to string => String(3)='3'

function isPalindrome(number) {
  var palindrome = '';
  for (var i = (String(number).length) - 1; i >=0; i--) {
    palindrome += String(number)[i];
  }
  if (palindrome === String(number)) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(12233221));



//console.log(isPalindrome(121)) => true
//console.log(isPalindrome(23)) => false


//if then previous one was to easy for you, pleas implement a method, that returns the prime numbers between 2 and 100. If the current number is a palindrome too, than return 'Zeno' instead of the number.
//feel free to use, the previous written pythn algorithm
//test method is missing on purpose.

function isPrimeTheGivenNumber(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}


function getPrimeNumbers(2, 100) {
  

getPrimeNumbers(2, 100);



//Good Luck! :)
