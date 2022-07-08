let family = {
  address: "seoul",
  members: {},
  addFamily: function (age, role, name) {
    this.members[name] = {
      age: age,
      role: role,
    };
  },
  getHeadcount: () => {
    return Object.keys(this.members).length;
  },
};

family.addFamily(30, "aunt", "louis");
family.addFamily(32, "aun1t", "lou12is");
family.addFamily(10, "aun2t", "lou34is");
console.log(family);
// 객체는 데이터들의 값을 묶은 것을 말합니다
