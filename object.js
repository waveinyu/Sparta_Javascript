// 클래스와 객체(1)

// 객체 (Object) :
//  관련있는 데이터들을 한번에 묶어서 특정 데이터 타입으로 표현할 수 없을까? -> 객체
//  물리적으로 존재하거나 추상적으로 생각할 수 있는 것중에서 자신의 속성을 갖고 있고 다른 것과 식별 가능한 것

// 클래스 (Class) :
//  객체를 만들 때 설계도처럼 이용하는 것
// *클래스 : 템플릿 / *객체 : 구체화

// 1) 클래스 선언
// - 함수처럼 클래스 역시 미리 선언해놓으면 필요할 때마다 그 클래스를 사용해서 동일한 모양을 가진 객체를 만들 수 있다
class Notebook {
  // 클래스명
  constructor(name, price, brand) {
    // 생성자(constructor) : 객체가 '생성'될 때 자바스크립트 내부에서 자동으로 호출이 되는 함수
    this.name = name;
    this.price = price;
    this.brand = brand;
    // this. : 클래스를 사용해 만들어질 객체 자기 자신
    // name, price, brand : 객체의 속성
    // 생성자의 바디에는 함수 호출 시 전달할 매개변수(name, price, brand)를 객체의 속성 namd, price, brand에 각각 할당
  }
}

const notebook1 = new Notebook("Galaxybook", "2000000", "Samsung");

console.log(notebook1);
console.log(notebook1.name);
console.log(notebook1.price);
console.log(notebook1.brand);
