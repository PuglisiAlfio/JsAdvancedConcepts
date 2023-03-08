function calculateAverageAge(persons) {
  // ...
  let arrAge = [];
  for (let i = 0; i < persons.length; i++){
    arrAge.push(persons[i].age);
  }
  let sumAge = 0;
  let totalsum = arrAge.reduce((accumulator, currentValue) => accumulator + currentValue, sumAge);
  function ageAverage(){
    let average = totalsum / persons.length;
    return Math.round(average);
  }
  return ageAverage;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons)();
console.log(persons);
console.log(average);
