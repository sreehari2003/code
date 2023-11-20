class Student {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

a = new Student("sreehari", 30);

a.getName();
