let person = {
  name: {
    first: 'Petar',
    last: 'Petrovic',
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

person.bio();
// person.introduceSelf();
// person['bio']();
// person['introduceSelf']();

//let choice = prompt('Biography or Introduction?');

//typeof person[choice] == 'function' ? person[choice]() : console.log('Oops');

// person.eyes = 'brown';
// person['farewell'] = function() {
//   console.log('Dovidjenja');
// }

// person.farewell();

// let key = prompt('Key?');
// let value = prompt('Value?');

// person[key] = value;

// console.log(Object.entries(person));

function createPerson(name, age) {
  const obj = {};
  obj.name = name;
  obj.age = age;
  obj.introduce = function() {
    console.log(`Hi, I'm ${this.name}`);
  }
  return obj;
}

const jovica = createPerson('Jovica', 43);
const mikica = createPerson('Mikica', 40);

jovica.introduce();
mikica.introduce();
