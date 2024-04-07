function User (name, age) {
    this.name = name;
    this.age = age;
    this.go = function(){
        console.log(this.name + " идет <br/>");
    };
    this.displayInfo = function(){
        console.log("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
}
User.prototype.maxage = 110;

function Employee(name, age, comp){
    User.call(this, name, age);
    this.company = comp;
    this.displayInfo = function(){
        console.log("Имя: " + this.name + "; возраст: " + this.age + "; компания: " + this.company + "<br/>");
    };
}
Employee.prototype = Object.create(User.prototype);

let tom = new User("Том", 26);
let bill = new Employee("Билл", 32, "Google");
tom.go();
bill.go();
tom.displayInfo();
bill.displayInfo();
console.log(bill.maxage);

module.exports = Employee;