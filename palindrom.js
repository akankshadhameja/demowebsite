const textinput = document.getElementById("text-input");
const result = document.getElementById("result");
let string;
function palindrome() {
string = textinput.value;
const lowerCaseStr = string.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    // convert string to an array
    const arrayValues = lowerCaseStr.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');
if (string === '') {
    alert('Please input a value');
  }
   else if(lowerCaseStr === reverseString) {
        result.textContent = `${string} is a palindrome`;
    }
    else {
        result.textContent = `${string} is not a palindrome`;
    }
}