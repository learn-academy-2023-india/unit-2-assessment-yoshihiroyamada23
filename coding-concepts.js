// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "India 2023"
// console.log(cohort.split(" "))

// a) Your answer:
// b) Verify and explain:

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: My answerr to this is Hello, LEARN STUDENT!
// b) Verify and explain: My answer is Hello,LEARN STUDENT! because it is telling us that from the console.log we are plugging in LEARN STUDENT in the () because that is our parameter and we are declaring it in the `${}`

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: 11, 13, 15
// b) Verify and explain: My verification on my answer is that that after the .filter where it creates new array the (number) is being asked to see if (number) which is 11, 12, 13, 14, 15 are not divisible by 2 and we are console logging it and it should give us 11, 13 ,15.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:it will log JavaScript
// b) Verify and explain: My answer is Javascript because from the console log it is telling us that in myCodingSkills there ia a category called languages and inside  the category there is JavaScript and Ruby and with the [] there is a 0 where I know that [] means index and we count the index from 0 and so on. since we are going from myCodingSkills to .languages means we are not looking at each letter for index but each word.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: we are creating a new .this line called George inside Learn 
// b) Verify and explain: My verification is somewhat correct.From the terminal it says Learn{ student: 'George', cohort: 'India', year: 2023 } and I thought we are creating a new .this in the constructor section. So when i changed .student it gave me a blank space so it makes sense to me that the new Learn("George") is plugging in the George in name.
