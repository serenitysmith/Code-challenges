// >Use the <strong>map</strong> method on the numbers array given at line 2 to add 5 to each number and put the results into a new array. The code has been started for you at line 3. 
//     </li>


const number = [1, 1, 2, 3, 5];
const numberAddFive = number.map(n=> n+5)

// The below line should console.log: [6, 6, 7, 8, 10]
console.log(numberAddFive); 



const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((number) => {
  // Perform the desired operation on each number
  // and return the modified value
  // Example: Multiply each number by 2
  return number * 2;
});

console.log(result);
// In the example above, the map method is used on the numbers array to multiply each number by 2. The modified values are stored in the result array, and finally, the result array is printed to the console.




const newNums = [4,6,7,4,8]

const newArr = newNums.map((num) =>{
    return num * 8;

});
console.log(newArr)

// Use the map method on the same numbers array to turn it into an array of strings, and add a colon and a space after each number. The code has been started for you at line 7


// 2 - uncomment the lines that start with "const" and "console.log"
const numbersReformatted = numbers.map(n=> n + ":");
// The below line should console.log: ["1: ", "1: ", "2: ", "3: ", "5: "] 
 console.log(numbersReformatted);

//  In the context of the expression (n => n + ":"), n is a parameter representing each element of the array that is being processed by the map method.
 
//  When you use the map method on an array, you provide a callback function as an argument. This callback function takes one or more parameters that represent the current element being processed. In this case, the callback function takes a single parameter n, which represents each element of the array.
 
//  So, (n => n + ":") is an arrow function that takes an element n and appends a colon (":") to it. The result is a new string formed by concatenating the original element with a colon. For example, if the original array is [1, 2, 3], the expression (n => n + ":") applied to each element would result in ["1:", "2:", "3:"].
 
//  The map method then applies this transformation to each element of the array, resulting in a new array where each element has been modified according to the logic inside the arrow function.


{/* <li>Use the map method on the words array on to remove the "s" from the end of each word. The code has been started for you in line 12. <strong>Hint:</strong> Research the use of the String.slice() method to remove the final letter from a string. There are other String methods that could also be used.</li>
</ul> */}

// 3
const words = ["planes", "trains", "automobiles"];
 const singularWords = words.map(n=> n.slice(0,-1))
// The below line should console.log: ["plane", "train", "automobile"]
 console.log(singularWords);

//  In the context of the expression (n => n + ":"), n is a parameter representing each element of the array that is being processed by the map method.

// When you use the map method on an array, you provide a callback function as an argument. This callback function takes one or more parameters that represent the current element being processed. In this case, the callback function takes a single parameter n, which represents each element of the array.

// So, (n => n + ":") is an arrow function that takes an element n and appends a colon (":") to it. The result is a new string formed by concatenating the original element with a colon. For example, if the original array is [1, 2, 3], the expression (n => n + ":") applied to each element would result in ["1:", "2:", "3:"].



// In the context of the expression words.map(n => n.slice(0, -1)), the numbers 0 and -1 are parameters passed to the slice method.

// The slice method is a built-in JavaScript function that allows you to extract a portion of an array or string based on specified starting and ending indices.

// In the example you provided, n represents each element of the words array. The slice method is then called on each element (n) using the parameters 0 and -1.

// Here's what each parameter means:

// The 0 parameter represents the starting index of the portion to be sliced. In this case, 0 means the beginning of the element.
// The -1 parameter represents the ending index of the portion to be sliced. In this case, -1 means the last character of the element.
// By using n.slice(0, -1), you are extracting a portion of each element from the first character (index 0) up to, but excluding, the last character (index -1). Essentially, it removes the last character from each element in the words array.

// For example, if words is ["apple", "banana", "cherry"], the expression words.map(n => n.slice(0, -1)) would result in ["appl", "banan", "cherr"]. Each element in the resulting array is the original word with the last character removed.


// const singularWords = words.map(n=> n.slice(0,-1))
// The below line should console.log: ["plane", "train", "automobile"]
//  console.log(singularWords);

const fruits = ["cherries", "bannas", "apples", "oranges"]

const fruit = fruits.map(n => n.slice(0, -1))
console.log(fruit)