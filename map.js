  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5];
let results = [];
for (let num of nums){
  results.push(num * 2);
}


// Using map()
const multiplyByTwo = function (num){
  return num * 2;
}

nums.map(multiplyByTwo);

const simple = nums.map(multiplyByTwo);

console.log(simple);
// Simplified w/ map()

const arrow = nums.map(num => num * 2);
console.log(arrow);
// Simplfied w/ map() + arrow function


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2, 
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];


for (let student of students){
  console.log(student.name);
  console.log(student.id);

}

const newArrays = students.map(student => [student.name + ', ' + student.id]);
console.log(newArrays);
