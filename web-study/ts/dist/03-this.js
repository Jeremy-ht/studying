class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(this.name, '--- hello');
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
const dog = new Dog('小白', 1);
dog.sayHello();
const dog2 = new Dog('小黑', 10);
dog2.sayHello();
