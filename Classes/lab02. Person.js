class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let person = new Person('Ivaylo', 'Apostolov', 35, 'ivaylo.apostolov@gmail.com');
console.log(person.age);
console.log(person.toString());

let person2 = new Person("Ivaylo");
console.log(person2.firstName);