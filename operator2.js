// 1. 비교연산자 (Comparison operator)
// '숫자값'을 비교하는 연선자
// Boolean을 값으로 갖는다
console.log(1 < 2); //true
console.log(2 <= 2); //ture
console.log(1 > 2); //false
console.log(1 >= 2); //false

// 2. 논리연산자 (Logical operator)
// '조건문'과 찰떡 ㅎㅎ
// || : or. 둘 중 하나만 true여도 true 리턴
// && : and. 둘 중 모두 true여야 true 리턴
// ! : not. true를 false로, false를 true로 리턴

let isOnSale = true;
let isDiscountItem = true;

console.log(isOnSale && isDiscountItem); // true && true 이므로 true
console.log(isOnSale || isDiscountItem); // true || true 이므로 true

isOnSale = false;
console.log(isOnSale && isDiscountItem); // false
console.log(isOnSale || isDiscountItem); // true

isDiscountItem = false;
console.log(isOnSale && isDiscountItem); // false
console.log(isOnSale || isDiscountItem); // false

console.log(!isOnSale); // true
console.log("--------------------------------------------");
// 3. 일치 연산자
let n = 1;
let m = 2;
let k = "1";
console.log(n === n); // true
console.log(n === m); // false
console.log("yuyu" === "yuyu"); // true
console.log("yuyu" === "Yuyu"); // false
console.log("--------------------------------------------");
console.log(n === k); // false
console.log(n == k); // true
// == : 자바스크립트는 비교하는 두 값의 데이터타입이 일치하지 않을 때 해당 값의 데이터타입을 자동으로 변환!
// 따라서 우리는 쓰지 않을 것. 엄밀한(strict) 프로그래밍이 되지 않기 떄문에

console.log("--------------------------------------------");
let cherryPrice = 200000;
let grapePrice = 100000;
let totalPrice = 0;
// let totalPrice = cherryPrice + grapePrice
console.log((totalPrice = cherryPrice + grapePrice)); // 300000

// totalPrice = totalPrice * 0.8;
console.log(`총 ${totalPrice*}원에 물건을 구입합니다.`); // 300000 * 0.8
