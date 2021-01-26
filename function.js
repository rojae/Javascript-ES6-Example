// function
// 1. function is Object in javascript

function printHello(){
    console.log('Hello');
}

printHello();

function log(message){
    console.log(message);
}

log('Hello @');

// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference

function changeName(obj){
    obj.name = 'programmer';
}

// const이지만 call by reference이기 때문에
// 함수를 통해서 바꿀 수 있음
const ellie = { name : 'rojae'}
changeName(ellie);
console.log(ellie); 


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`{message} ny ${form}`);
}

// 4. Rest Parameters (added in ES6)
function printAll(...args){
    for(const arg of args){
        console.log(arg);
    }
//    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'rojae');


// 5. Local scope ~> 지역변수와 전역변수
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
// 모든 함수에 return이 없으면, return 'undefined'이다
function sum(a,b){
    return a+b;
}
const result = sum(2,3);
console.log(`sum : ${sum(1,2)}`);

// 7. Early return, early exit

// bad case
function updateUser(user){
    if(user.point > 10){
        // something to do
    }
    else{
        return;
    }
}

// good case
function updateUser(user){
    if(user.point <= 10){
        return;
    }
    else{
        // something to do
    }
}


// First-class function
// funcetion are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression (can be hoisting)
// js엔진은 선언된것은 제일 위에 올리기 때문에 호이스팅이 가능하다
const print = function(){
    console.log('print');
}
print();

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('yes!');
};

// named function
const printNo = function(){
    console.log('no!');
    //print();
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// 3. Arrow Function
const simplePrint = () => console.log('allow print');
const add = (a, b) => a + b;

console.log(add(1,2));
simplePrint();


// 4. IIFE : Immediately invoked function expression
// 맨뒤에 ()을 붙이면 사용이 가능하다
(function hello(){
    console.log('IIFE');
})();
