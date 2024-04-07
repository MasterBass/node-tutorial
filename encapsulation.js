function User (name, age) {
    this.name = name;
    let _age = age;
    this.displayInfo = function(){
        console.log("Имя: " + this.name + "; возраст: " + _age);
    };
    this.getAge = function() {
        return _age;
    };
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}

const tom = new User("Том", 26);
console.log(tom._age);
console.log(tom.getAge());
tom.setAge(12);
tom.displayInfo();