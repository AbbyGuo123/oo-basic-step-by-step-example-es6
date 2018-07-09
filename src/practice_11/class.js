
class Class{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return "Class "+this.number;
    }
    assignLeader(student){
        if(student.klass.equal(this)){
            this.leader = student;
            if(this.listenAssignLeaderTeacher!==undefined)
            this.listenAssignLeaderTeacher.DoAssignLeaderListener(student);
        } 
        else
        console.log('It is not one of us.');
    }
    equal(klass){
        return this.number===klass.number;
    }
    appendMember(student){
        student.klass = this;
        if(this.listenJoinTeacher!==undefined)
        this.listenJoinTeacher.DoJoinListener(student);
    }
    registerAssignLeaderListener(teacher){
        this.listenAssignLeaderTeacher = teacher;;
    }
    
    registerJoinListener(teacher){
        this.listenJoinTeacher = teacher;
    }
    
}
module.exports = Class;
