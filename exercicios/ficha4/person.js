function Person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName
}

Person.prototype.age = 0;

Person.prototype.greet = function() {
    console.log("Hello " + this.firstName + " " + this.lastName + ". You are " + this.age + " years old.");
}

var john = new Person("John", "Doe");
john.age = 45;
john.greet();

var pedro = new Person("Pedro", "Malho");
pedro.age = 28;
pedro.greet();



console.log(john.__proto__);
console.log(pedro.__proto__);
console.log(john.__proto__ == pedro.__proto__);