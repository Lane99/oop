let person = {
  name: {
    first: 'Milan',
    last: 'Vukadin',
  },
  age: 34,
  bio() {
    console.log(
      `${this.name.first} ${this.name.last} was born in Ohio in ${
        2022 - this.age
      }`
    );
  },
  introduceSelf() {
    console.log(`Hi I'm ${this.name.first}`);
  },
};

// person.bio();
// person.introduceSelf();
// person['bio']();
// person['introduceSelf']();

//let choice = prompt('Biography or Introduction?');

//typeof person[choice] == 'function' ? person[choice]() : console.log('Oops');

person.eyes = 'brown';
person['farewell'] = function() {
  console.log('Dovidjenja');
}

person.farewell();

console.log(Object.entries(person));