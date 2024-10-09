// alert displays to the user
// alert(`Hello World`);

// console.log displays in the dev tools -> console tab
// console.log(`Hey there!`);

// variables are placeholders for values
const age = 16;
const name = `William Shakespeare`;

// variable values have data types
const cookiesEaten = 12; // number
const message = `Woody says, "There's 4 snakes in my boot!"`; // string
const isInAntarctica = false; // boolean
const blackHole = null; // null
const carName = undefined; // undefined

// const otherMessage = 'The librarian shouted, "SILENCE!"';
// const anotherMessage = "Jon's favorite animal is a bunny";
// const lastMessage = 'Jon\'s librarian said, "Your books are overdue!"';

// you can do math with numbers
let coins = 10;
coins = coins + 25; // 35
coins = coins - 1; // 34
coins = coins * 3; // 102
coins = coins / 2; // 51

// console.log(coins % 4);

// you can concatenate strings
const firstName = `Lucy`;
const lastName = `Ford`;

// const fullName = `Your name is ` + firstName + ` ` + lastName;
const fullName = `Your name is ${firstName} ${lastName}!`;

let level = `1`;
level = level + 3;

// console.log(isInAntarctica);
// console.log(typeof coins);


//logical operators tell us if something is true or false
const isSuperman = false;
const livesInCalifornia = false;
const isOlderThan21 = true;
const livesInSouthCarolina = true;

// console.log(isSuperman && livesInSouthCarolina) // false
// console.log(isOlderThan21 && livesInSouthCarolina) // true
// console.log(isSuperman && livesInCalifornia) // false

// console.log(isSuperman || livesInSouthCarolina) // true
// console.log(isSuperman || livesInCalifornia) // false

// console.log(!isSuperman); // true
// console.log(!isSuperman && livesInCalifornia); // false

// console.log(
//   isSuperman && 
//   isOlderThan21 && 
//   livesInSouthCarolina && 
//   livesInCalifornia
// );

// comparison operators tell us if two things are the same or not
const bunnyCount = 2;
const kidsCount = 2;
const furColor = `brown`;
const numberAsAString = `2`;

// console.log(bunnyCount === kidsCount); // true
// console.log(bunnyCount === numberAsAString); // false
// console.log(kidsCount === furColor) // false

// console.log(bunnyCount !== numberAsAString); // true
// console.log(bunnyCount !== kidsCount); // false

const studentCount = 8;
const teacherCount = 1;
const seatCount = 50;
const lockerCount = 50;

// console.log(seatCount > studentCount); // true
// console.log(teacherCount > seatCount); // false
// console.log(seatCount > lockerCount); // false

// console.log(seatCount >= lockerCount); // true
// console.log(teacherCount >= studentCount); // false

// console.log(teacherCount < seatCount); // true
// console.log(seatCount <= lockerCount); // true
// console.log(studentCount <= seatCount); // true