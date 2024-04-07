class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(this.name, this.age);
    }
    static nameToUpper(person){
        return person.name.toUpperCase();
    }
}
class Employee extends Person{
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    display(){
        super.display();
        console.log("Employee in", this.company);
    }
    work(){
        console.log(this.name, "is hard working");
    }
}

let tom = new Person("Tom", 34);
let bob = new Employee("Bob", 36, "Google");
tom.display();
bob.display();
bob.work();

console.log(Person.nameToUpper(bob));