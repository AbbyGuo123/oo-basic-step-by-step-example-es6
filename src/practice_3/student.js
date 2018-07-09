const person = require('../../src/practice_3/person');
class student extends person{
    constructor(name,age,klass){
        super(name, age);
        this.klass = klass;
    }
    introduce(){
        return 'I am a Student. I am at Class '+this.klass+'.';
    }
}
module.exports =student;


