class Person {
  name: string;
  age: number;

  getName(): string {
    return this.name
  }

  static sayHello(a: number, b: number): number {
    return a + b
  }
}

const person = new Person();

console.log(person.name);
console.log(Person.sayHello(1, 2));
