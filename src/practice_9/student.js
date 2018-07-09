const Person = require('../../src/practice_8/person');
const Class = require('../../src/practice_8/class');
class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name, age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass.leader!==undefined){
            if(this.klass.leader.equal(this))
            return `${super.introduce()} I am a Student. I am Leader of Class ${this.klass.number}.`;
        }
        return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
    }
    equal(student){
        return student.id===this.id;
    }
}
module.exports =Student;





