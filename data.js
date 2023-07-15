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




