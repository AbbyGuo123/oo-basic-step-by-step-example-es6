const person = require('../../src/practice_3/person');
class worker extends person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return 'I am a Worker. I have a job.';
    }
}
module.exports =worker;
