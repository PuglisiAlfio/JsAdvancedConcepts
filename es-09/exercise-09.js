const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
//scrivere person[key] equivale a scrivere ".value"
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

