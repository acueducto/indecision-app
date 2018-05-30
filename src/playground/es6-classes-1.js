class Person {
  constructor(name = 'Anonymus', age =0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
      return `Hi. I am ${this.name}!`;
  }
  getDescription(){
      return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        this.major = major;
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
          description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, homeLocation){
        super(name)
        this.homeLocation = homeLocation;
    }
 
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting +=` and im visiting from ${this.homeLocation}`;
        }
         return greeting;
    }
}

const me = new Traveler('Alberto Montiel', 'Oak Park');
console.log(me.getGreeting());
const other = new Traveler();
console.log(other.getGreeting());


