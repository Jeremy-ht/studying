class Person {
    getName() {
        return this.name;
    }
    static sayHello(a, b) {
        return a + b;
    }
}
const person = new Person();
console.log(person.name);
console.log(Person.sayHello(1, 2));
