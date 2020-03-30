"Use strict";
//1) Define a function max() that takes two numbers as arguments and returns 
//the largest of them. Use the if-then-else construct available in Javascript.

function max(firstNum, secondNum) {
    if (firstNum > secondNum) {
        console.log(firstNum + " is larger than " + secondNum);
    } else {
        console.log(firstNum + " is less than " + secondNum);
    }
    return;
}
max(66, 23);


//2) return square of any number
const square = function(number) {
    return number * number
};
let x = square(4)
console.log(x);


//3) Define a function maxOfThree() that takes three numbers
// as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(maxOfThree(4, 7, 38))


//4)Write a function isVowel() that takes a character 
//(i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(argument) {
    var text;
    var argument = argument.toLowerCase();
    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++) {
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}
// to see if "A" is a vowel
var char = "A";

if (isVowel(char)) {
    console.log(char + " is a vowel");
} else {
    console.log(char + " is not a vowel");
}

//5) Define a function reverse() that computes the reversal of a string. 
function reverse(str) {
    var text = '';

    for (var i = str.length - 1; i >= 0; i--) {
        text += str[i];
        continue
    }
    return text;
    // return text.toLowerCase();
}
console.log(reverse("Apple"));


//6) Write a function findLongestWord() that takes an array of words and returns
// the length of the longest one.

function findLongestWord(str) {
    const stringArray = str.split(" ");
    return stringArray;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
function findLongestWord(str) {
    return str.length;
}
//findLongestWord("The quick brown fox jumped over the lazy dog");

//7) Write a function filterLongWords() that takes an array of words and
// an integer i and returns a new array containing only those words that were longer than i characters.
let filterLongWords = (words, i) => {
    if (Array.isArray(words) && !isNaN(i)) {
        let filtered = [];
        for (let j = 0; j < words.length; j++) {
            if (words[j].length > i)
                filtered.push(words[j]);
        }
        return "filtered array of " + words.toString() + " is = " + filtered.toString();
    } else {
        return "Error: wrong input formats";
    }
}
console.log(filterLongWords(["one", "three", "four", "six"], 3));


//8) Write a function named, computeSumOfSquares, that takes as input, an array of 
//numbers and calculates and returns the sum of the squares of each number in the 
//input array. E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14.
// Note: Write your Javascript code without using Imperative programming. 
//i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.
let computeSumOfSquares = (nums) => {
    if (Array.isArray(nums)) {
        const result = nums.map((val) => { return val * val }).reduce((prev, current, index) => {
            return prev + current;
        });
        return "The sum of square of array " + nums.toString() + " is = " + result;
    } else {
        return "Error: wrong input formats";
    }
}
console.log(computeSumOfSquares([1, 2, 3]));


//9) Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and 
//prints only the numbers which are odd.
let printOddNumbersOnly = (nums) => {
    if (Array.isArray(nums)) {
        const result = nums.filter((val) => { if (val % 2 != 0) return val; });
        return "The odd number of the arrays" + nums.toString() + " are = " + result.toString();
    } else {
        return "Error: wrong input formats";
    }
}
console.log(printOddNumbersOnly([1, 2, 3]));



//10) Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and
//calculates and returns the sum of the squares of only the even numbers in the input array. 
//E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.
let computeSumOfSquaresOfEvensOnly = (nums) => {
    if (Array.isArray(nums)) {
        const result = nums.filter((val) => { if (val % 2 === 0) return val; }).map((val) => { return val * val }).reduce((prev, current, index) => { return prev + current });
        return "The sum of squared even number of the arrays " + nums.toString() + " is = " + result;
    } else {
        return "Error: wrong input formats";
    }
}
console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3]));


//11) Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) 
//without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. 
let sum_functional = (nums) => {
    if (Array.isArray(nums)) {
        if (!nums.some(isNaN)) {
            const sum = nums.reduce((prev, current, index) => { return prev + current; });
            return "The Sum of the array " + nums.toString() + " is = " + sum;
        } else {
            return "Error: Array contains non numeric value";
        }

    } else {
        return "Error:" + nums + " is not array";
    }
}
console.log(sum_functional([1, 2, 3]));


//12) Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers 
//and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) 
//should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)
let findSecondBiggest = (nums) => {
    if (Array.isArray(nums)) {
        if (!nums.some(isNaN)) {
            let biggest = nums[0];
            let second_biggest = nums[0];
            for (let i = 1; i < nums.length; i++) {
                if (nums[i] > biggest) {
                    let temp = biggest;
                    biggest = nums[i];
                    second_biggest = temp;
                }
            }
            return "The Second biggest of the array " + nums.toString() + " is = " + second_biggest;
        } else {
            return "Error: Array contains non numeric value";
        }

    } else {
        return "Error:" + nums + " is not array";
    }
}
console.log(findSecondBiggest([1, 2, 3, 4, 5]));


//13) Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, 
//and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning
// with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), 
//prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1),
//prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
let printFibo = (n, a, b) => {
    if (!isNaN(n) && !isNaN(a) && !isNaN(b)) {
        let result = [];
        let prev, current;
        for (let i = 0; i < n; i++) {
            if (i === 0) {
                result.push(a);
                prev = a;
            } else if (i === 1) {
                result.push(b);
                current = b;
            } else {
                let sum = prev + current;
                result.push(sum);
                prev = current;
                current = sum;
            }
        }
        return "The Fibonacci sequence is of input lenght=" + n + ", start=" + a + " and " + b + " is = " + result.toString();
    } else {
        return "Error: incorrect format";
    }
}
console.log(printFibo(10, 0, 1));


//14) Refer to your work on Lab Assignment 4. Add Javascript code to work with your 2 HTML forms as follows:
//Login Form: Add code such that when the Submit button is clicked, the values entered in the input fields are printed to the Console.
//New Product Form: Add code such that when the Submit button is clicked, the values entered in the input fields are displayed in a pop-up window.


//15)Using JavaScript and HTML and CSS, implement a webpage that displays a working, ticking counter Clock, that counts/displays the current Date and 
//time of the browser host, in the format: 2019-11-4 12:16:01
function modifyTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function clock() {
    var today = new Date();
    var d = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var y = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = modifyTime(m);
    s = modifyTime(s);
    document.getElementById('clock').innerHTML = y + "-" + mm + "-" + d + " " + h + ":" + m + ":" + s;
    let t = setTimeout(function() {
        clock()
    }, 500);
}
clock();



//16) Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. 
//For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
let sum = (nums) => {
    if (Array.isArray(nums)) {
        if (!nums.some(isNaN)) {
            let sum = 0;
            for (let i = 0; i < nums.length; i++) {
                sum += nums[i];
            }
            return "The Sum of array " + nums.toString() + " is= " + sum;
        } else {
            return "Error: Array contains non numeric value";
        }

    } else {
        return "Error:" + nums + " is not array";
    }
}
console.log(sum([1, 2, 3, 4]));

//16.1) multiplication
let multiply = (nums) => {
    if (Array.isArray(nums)) {
        if (!nums.some(isNaN)) {
            let mul = 1;
            for (let i = 0; i < nums.length; i++) {
                mul *= nums[i];
            }
            return "The Multiply of array " + nums.toString() + " is= " + mul;
        } else {
            return "Error: Array contains non numeric value";
        }

    } else {
        return "Error:" + nums + " is not array";
    }
}
console.log(multiply([1, 2, 3, 4]));