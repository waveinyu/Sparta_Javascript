// 함수 : 특정 작업을 수행하는 코드의 집합
// 반복되는 특정 작업을 수행해야 한다면 그 코드 자체를 어딘가에 만들어서 저장하는 게 효율적일 것!

// 함수의 선언
// 변수를 선언하고 해당 변수에 값을 할당했던 것처럼,
// 함수도 선언을 하고 해당 함수가 실행할 코드의 집합을 만들어서 저장

// function 함수명 (매개변수) {
//    이 함수에서 실행될 코드들
//    return 반환값
// }

// *매개변수(parameter) : 해당 함수의 바디에 있는 코드에서 사용할 수 있는 일죵의 변수
//                       함수 호출시 전달
//                       함수를 실행하기 위해 필요한 일종의 input
// *중괄호 안에는 이 함수가 해야할 일들을 코드로 쭉 작성한 뒤, 반환할 값을 명시

function calculator(price1, price2) {
  const sum = price1 + price2;
  console.log(`두 상품의 합계는 ${sum}입니다.`);
  const avg = sum / 2;
  return avg;
}
console.log(calculator(100, 200));

// 함수를 선언하면 함수를 호출해야 한다.
// const 변수명 = 선언한 함수명(매개변수들...)
const priceA = 1000;
const priceB = 2000;
// 함수의 호출
const avg1 = calculator(priceA, priceB);
console.log(`두 상품의 평균은 ${avg1}입니다.`);

const priceC = 3000;
const priceD = 4000;
// 함수의 호출
const avg2 = calculator(priceC, priceD);
console.log(`두 상품의 평균은 ${avg2}입니다.`);
