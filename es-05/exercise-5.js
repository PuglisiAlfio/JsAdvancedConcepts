const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// const person2 = person1;
// se facessimo come sopra diremo che person2 è uguale a person1 quindi se cambiassimo il nome di person2 (essendo uguale a person1) cambierebbe automaticamente anche il name di person1
const person2 = Object.assign({}, person1);

person2.firstName = "Simon";
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
