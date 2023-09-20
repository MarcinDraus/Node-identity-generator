
const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['John', 'Michael', 'Robert', 'William'];
const femaleNames = ['Mary', 'Jennifer', 'Linda', 'Patricia'];
const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis'];

function randChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  const people = [];

  for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const firstName = gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
    const lastName = randChoice(lastNames);
    const age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
  
    const person = {
      gender,
      firstName,
      lastName,
      age,
    };
  
    people.push(person);
  }
 
  const jsonData = JSON.stringify(people, null, 2);

  fs.writeFile('people.json', jsonData, (err) => {
    if (err) {
      console.error('Something went wrong:', err);
    } else {
      console.log('File has been successfully generated! Check people.json');
    }
  });
   