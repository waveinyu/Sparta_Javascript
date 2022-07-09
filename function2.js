// 함수(2)
// 함수 호출 시 코드의 흐름

//Q. 세 개의 물건 가격을 매개변수로 전달받아 평균값을 리턴하는 함수를 정의하고,
// 그 함수를 호출해서 평균값을 출력
function calculatorAvg2(a, b, c) {
  const sum = a + b + c;
  console.log(`총합은 ${sum}입니다.`);
  const avg = sum / 3;
  return avg;
}
const avgAnswer = calculatorAvg2(1, 2, 3);
console.log(`평균은 ${avgAnswer}입니다.`);
