// 1. 문자열 붙이기
//  - 문자열 + 숫자 = 문자
//  - 템플릿 리터럴(Template literals) : `${변수명}`

console.log("2" + 3); // 23
console.log(typeof ("2" + 3)); // string
console.log(2 + 3);
console.log(typeof (2 + 3));

const applePrice = 2000;
console.log("이 사과의 가격은 " + applePrice + "원 입니다.");
console.log(`이 사과의 가격은 ${applePrice}원 입니다.`); // `${변수명}`

const height = 163;
console.log("제 키는 " + height + "cm입니다.");
console.log(`제 키는 ${height}cm입니다.`);

// 2. 산술연산자(Numeric operators)
let a = 1;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b); // 나머지
console.log(a ** b);

// 3. 증감연산자(++i / i++)

// 먼저 피연산자의 값을 1 증가시킨 후 해당 연산을 진행
let count = 1;
// const preIncrement = ++count;
count = count + 1;
const preIncrement = count;
console.log(`count = ${count}, preIncrement = ${preIncrement}`);

// 먼저 해당 연산을 수행하고 난 뒤, 피연산자의 값을 1 증가시킴
let count2 = 1;
// const preIncrement2 = count++;
const postIncrement = count2;
count2 = count2 + 1;
console.log(`count2 = ${count2}, postIncrement = ${postIncrement}`);

// 4. 대입연산자
const apple = 10;
const banana = 5;
let cost = 0; // 재할당 할거야!

cost += apple;
console.log(cost); // 10

cost += banana;
console.log(cost); // 15

cost -= banana;
console.log(cost); //10
