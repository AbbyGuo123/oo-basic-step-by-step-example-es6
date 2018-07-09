const Person = require('../../src/practice_8/person');
class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses=klasses;
       
    }
    introduce(){
        if(this.klasses===undefined)
            return super.introduce()+' I am a Teacher. I teach No Class.';
        return super.introduce()+ ` I am a Teacher. I teach Class ${this.klasses.map(item=>item.number).join(", ")}.`;
    }
    introduceWith(student){
        if(student.klasses!==undefined&&student.klasses.number===this.klasses.number)
        return super.introduce()+` I am a Teacher. I teach ${student.name}.`;
        else
        return super.introduce()+` I am a Teacher. I don\'t teach ${student.name}.`;
    }
}
module.exports =Teacher;


