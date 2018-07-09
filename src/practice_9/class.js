class Class{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return "Class "+this.number;
    }
    assignLeader(student){
        if(student.klass.equal(this))
            this.leader = student;
        else
        console.log('It is not one of us.');
    }
    equal(klass){
        return this.number===klass.number;
    }
    appendMember(student){
        student.klass = this;
    }
}
module.exports = Class;
