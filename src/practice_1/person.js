class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        console.log("++++"+this.name);
    }
    introduce(){
        return "My name is " + this.name + ". I am " + this.age + " years old.";
    } 
}
module.exports =person;
