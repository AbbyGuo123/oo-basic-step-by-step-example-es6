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
    }
    equal(klass){
        return this.number===klass.number;
    }
}
module.exports = Class;
