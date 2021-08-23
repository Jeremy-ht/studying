console.log('Hello TS');

let a: number;

a = 10;


function sum(a: number, b: number): number {
    return a + b;
}

let number = sum(111, 123);


let b: unknown;

b = 123;
b = true;

let c: boolean;
c = true;

c = <boolean>b;

c = b as boolean;

if (typeof b === "boolean") {
    c = b;
}


let e: true;

console.log(typeof e);
