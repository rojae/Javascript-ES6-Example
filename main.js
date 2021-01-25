// 1. Use Strict
// Javascript is very flexible
// add EXMAScript 5
'use strict'
console.log('Hello World!');

// 2. Variable rw(read, wrtie)
// let (ECMA 6)
let globalName = 'global Name';

{
    let namer = 'rojae';
    console.log(namer);
    namer = 'rojaess';
    console.log(namer);
}

console.log(globalName);

// var (don't ever use this)
// var hoisting (move declaration form buttom to top)
// let과 다르게 var는 블럭의 유무와 상관없이 사용이 가능하다
// var는 undefined이 출력된다 (var는 스크립트의 변수를 시작에 읽고 할당한다)
// 호이스팅 : 아래에 있는 변수를 상단으로 옮겨준다. 
// (유연성의 장점이 있지만 규모가 커지면 위험하다)
console.log(age);
var age = 4;


// 3. Constant r (read only)
// favor immutable data type always for a few reasons
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// so .. variable 
// ~> mutable let, immutable const

// primitive : single item in memory    ~> immutable data
// object : box container               ~> mutable data
// function, first-class function

// 4. Number
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 5. BigInt
const bigInt = 1231212312312312312312312312311231231231212312321323123312312n;
console.log(`value : ${bigInt}, type: ${typeof bigInt}`);

// 6. String
// back tic == ` 을 통해서 문자열 합치기가 쉬움
const char = 'c';
const rojae = 'rojae';
const greeting = 'hello World';

console.log(`value: ${rojae}, ${greeting}`);


// 7. Null
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`);

// 8. undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// 9. symbol, create uniqure identifiers for objects
// 주어지는 String ('id')에 상관 없이 다른 값을 할당해준다
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2);

// 10. Dynamic typing : dynamically typed languare
// 변수를 선언하고, 타입은 나중에 정한다
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));        // error
// ~> dynamic typing으로 오류가 너무 발생하기 때문에
// typeScript가 탄생