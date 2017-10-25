import Person from "./person.js";

class Worker extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return "I am a Worker. I have a job.";
    }
}

export default Worker;