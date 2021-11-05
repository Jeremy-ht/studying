class Dog {

  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(this.name, '--- hello')
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

}

const dog = new Dog('小白', 1);
dog.sayHello();

const dog2 = new Dog(
  '小黑',
  10
)

dog2.sayHello();
