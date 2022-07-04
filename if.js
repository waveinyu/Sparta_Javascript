// 조건문 1
// if 구문을 활용해서 조건을 만족했을 대만 코드를 실행할 수 있는 구문
// 리턴값은 true/false 를 반환하는 Boolean
// Boolean을 리턴하는 연산자 : 비교/논리/일치 연산자
// if (조건) {조건을 만족할 때 실행할 코드}

// 조건문 2
// else, else if
// if 구문의 조건을 만족하지 않았을 때 실행하고 싶은 코드를 else 구문과 함께 작성한다.

const shirtPrice = 50000;
if (shirtPrice < 40000) {
  console.log("셔츠를 사겠습니다.");
} else {
  console.log("너무 비싸요. 셔츠 안 살래");
}

const capPrice = 50000;
if (capPrice < 40000) {
  console.log("신발을 사겠습니다.");
} else if (capPrice <= 50000) {
  console.log("제가 한 번 고민해보겠습니다.");
} else {
  console.log("너무 비싸요. 신발 안 살래");
}
// 중간에 true가 한 번이라도 있다면 해당 코드를 실행하고 종료가 된다는 것 꼭 기억하기

let distance = 2;
if (distance < 2) {
  console.log("나나야 걸어가자");
} else if (distance >= 2 && distance < 5) {
  //둘 다 만족해야 true
  console.log("나나야 우리 택시 타고 가자");
} else {
  console.log("그러지 말고 나나야 우리 기차 타고 가자");
}
