'use strict'

// Object.js
// object = {key : value};
const name = 'rojae';
const age = 4;
print(name, age);

function print(name, age){
    console.log(name);
    console.log(age);
}

// 1. Literals and properties
const obj1 = {};            // object literal syntax
const obj2 = new Object();  // object constructor syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

// property 추가 가능
const rojae = {name : 'rojae', age : '4'};
print(rojae);

rojae.hasJob = true;
console.log(rojae.hasJob);

delete rojae.hasJob;
console.log(rojae.hasJob);


// 2. Computed properties
// key should be always string
console.log(rojae.name);        // coding
console.log(rojae['name']);     // real time

// computed properties를 사용하는 법
function printValue(obj, key){
    console.log(obj[key]);
}
printValue(rojae, 'name');
printValue(rojae, 'age');

// 3. Property value shortHand
const person1 = { name : 'bob', age: 2};
const person2 = { name : 'steve', age : 3};
const person3 = { name : 'dave', age : 4};
const person4 = makePerson('rojae', 30);
const person5 = new Person('rojae', 25);
console.log(person4);
console.log(person5);

// 4. Constructor function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 기존에는 이렇게도 사용
function makePerson(name, age){
    return {
        name,
        age,
    };
}

// 5. in operator: property existence check (key in obj)
console.log('name' in rojae);
console.log('age' in rojae);
console.log('address' in rojae);


// 6. for ... in vs for .. of
// for (key in obj)
console.clear();
for (let key in rojae){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,3,4,5];

for(let value of array){
    console.log(value);
}

// 7. cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name : 'rojae', age : '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// Object assign
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size: 'big'};

// 연속되는 경우, 뒤에 값을 덮어쓴다.
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color);
console.log(mixed.size);