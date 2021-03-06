'use strict';
// Object-oriented promgramming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name=name;
        this.age=age;
    }
    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
let sally=new Person('sally',12);
console.log(sally)

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak()

//2. Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    get age() { // 값을 리턴
        return this._age;
    }// age라는 getter를 정의하는 순간 this.age는 getter를 호출한다.

    set age(value) { // 값을 설정
        // if (value<0){
        // throw Error('age can not be negative');
        // }
        this._age=value<0 ? 0:value;
    } //sett를 정의하는 순간 =age를 호출할 때 setter를 호출한다.
    //setter 안에서 전달된 value를 this.age 안에 할당할 때 memory 값을
    //update하는 것이 아니라 setter를 호출하게 된다.
}

const user1=new User('Steve', 'Job', -1);
console.log(user1.age)

// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicField=2;
    #privateField=0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber=articleNumber;
    }
    
    static printPublisher() {
        console.log(Article.publisher)
    }
}
//static은 class 자체에 속성을 지정하는 것임. 고정
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    draw() {
        console.log('drawing ${this.color} color!');
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); 
        console.log('triangle');
    }
    getArea() {
        return (this.width * this.height)/2
    }

    toString() {
        return 'Triangle: color: ${this.color}'
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof Shape); //t
console.log(triangle instanceof Object); //t
console.log(triangle.toString());
// to see if the left one is the instance of right one

// Visit MDN javascript reference page.