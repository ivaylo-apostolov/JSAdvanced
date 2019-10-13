class Person{
    _email;
    
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    get email(){
        return this._email;
    }
    set email(value){
        if(typeof value === undefined){
            this._email = '';
        }else{
            this._email = value;
        }
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

console.log([new Person('Anna', 'Simpson', 22, 'anna@yahoo.com')
, new Person('SoftUni')
, new Person('Stephan', 'Johnson', 25)
, new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')]);


// let person = new Person('Ivaylo', 'Apostolov', 35, 'ivaylo.apostolov@gmail.com');
// console.log(person.age);
// console.log(person.toString());