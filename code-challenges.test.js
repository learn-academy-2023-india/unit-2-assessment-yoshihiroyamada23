// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
// describe("multiplyByTHree", () =>{
//     it("is a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3", () =>{
// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]
// expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
// expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
// })
// })
// // b) Create the function that makes the test pass.

// // Pseudo code:
// // input:single array of numbers
// // output: array with numbers mult by 3
// //do something to every item in the array .map
// //value * 3
// const multiplyByThree = (array) => {
//     return array.map((value) => {
//       return value * 3
//     })
//   }
// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// // a) Create a test with expect statements for each of the variables provided.
// //test
// describe("divisibleByThree", () =>{
//     it("Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () =>{
//         const object1 = { number: 15 }
//         // Expected output: "15 is divisible by three"
//         const object2 = { number: 0 }
//         // Expected output: "0 is divisible by three"
//         const object3 = { number: -7 }
//         // Expected output: "-7 is not divisible by three"
// expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
// expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
// expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
// })
// })

// // b) Create the function that makes the test pass.

// // Pseudo code:
// //input:create a function to see if the number inside the argument is divisible by three or not
// //output:arguments divide by three
// //use if, else if, else statement to decide if object 1-3 are divisible by three or not

// const divisibleByThree = (obj) =>{
//     //to get the number of the object have to use .number
//     if(obj.number % 3 === 0){
//         return `${obj.number} is divisible by three`
//     }else if (obj.number % 3 !== 0)
//         return  `${obj.number} is not divisible by three`
// }

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("arrayOfWords", () =>{
    it("Create a function that takes in an array of words and returns an array with all the words capitalized.", () =>{
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
expect(arrayOfWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
expect(arrayOfWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
})
})

// b) Create the function that makes the test pass.

// Pseudo code:
//input:takes in an array of words
//output: return all of the words capitalized
//.toUpperCase only the 1st index
//.map to map arrays
//.split to split the wordings
//.join to join the splitted words for the capitalization

const arrayOfWords =(array) =>{
    return array.map(value =>{
        return value.split ("").map((value,index) =>{
            if (index === 0){
                return value.toUpperCase()
            }else {
                return value
            }
            
        }).join("")
    })
}
