// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals : 
'''' 1 + 2 = ${ 1 + 2}`);

console.log("rojae's book");

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operator
console.log(10 < 6);
console.log(10 > 1);

// 6. Logical operators : || (OR), && (AND), ! (NOT)

const v1 = true;
const v2 = 4 < 2;

// be not heavy func in front side
// v1 : true ~> func check() not work
console.log(`or: ${v1 || v2 || check()}`);

// ~> 무거운 연산은 or이든 and이든 뒤에 두자
console.log(`and: ${v1 && v2 && check()}`);

function check(){
    for(let i = 0; i < 10; i++){
        console.log('!!');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const rojae1 = { name : 'rojae'};
const rojae2 = { name : 'rojae'};
const rojae3 = rojae1;

console.log(rojae1 == rojae2);      // false
console.log(rojae1 === rojae2);     // false
console.log(rojae1 === rojae3);     // true (type compare)

// 8. Conditional operators : if - else if - else
const namer = 'rojae';
if(namer === 'rojae'){
    console.log('Welcome, rojae');
}else{
    console.log('Who are you?');
}

// 9. Switch statement
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love ya');
        break;
    default:
        console.log('what\'s browser');
        break;
}

// 10. Loops
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

do{
    console.log(`do while: ${i}`);
    i--;
}while(i > 0);

for(let i = 0; i < 3; i++){
    console.log(`for : ${i}`);
}

// 11. nested loop ~> BigO^2
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        // 10*10 ~> 10^2
    }
}