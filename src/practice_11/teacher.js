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
    isTeaching(student){
        return isIn(student.klass);
        
    }
    isIn(student){
        return this.klasses.map(item=>item.number).find(item=>item === student.klass);
    }
    DoJoinListener(student){
        // console.error(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
        // console.error('I am Tom. I know Jerry has joined Class 2.');
    }
    DoAssignLeaderListener(student){
        // console.error(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
        // console.error('I am Tom. I know Jerry become Leader of Class 2.');
    }

}
module.exports =Teacher;


