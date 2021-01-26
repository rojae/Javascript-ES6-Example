'use strict';

// Object-oriendted programming
// class : template
// object : instance of a class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class
class Person{
    // constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const rojae = new Person('rojae', '25');
console.log(rojae.name);
console.log(rojae.age);
rojae.speak();

// 2. Getter and Setter

class User{
    constructor(firstName, lastName, age){
        // this call get method and setter
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;         
    }

    // 무한정으로 반복이 되기 때문에 변수의 이름을 조금 바꾼다
    get age(){
        return this._age;
    }

    // 나이는 0보다는 커야한다
    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('oh','rojae',-1);
console.log(user1.age);


// 3. Fields
// Too soon!
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);   // 접근 불가능

// 4. Static properties and methods
class Article{
    static publisher = 'Rojae static';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
    }
    getArea(){
        return (this.width * this.width)/2;
    }
}

const rectangle = new Rectangle(20, 20 , 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'yellow');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);