//Call a child method from a parent class

class Parent {
    autoPlay() {
        this.play("automatically "); // call child method
    }
    play(x) {
        console.log(x+"playing default from "+this.constructor.name);
    }
}

class ChildA extends Parent {
    // does not override play
}
class ChildB extends Parent {
    constructor(song) {
        super();
        this.song = this;
    }
    play(x) {
        console.log(x+"playing "+this.song+" from ChildB");
    }
}

const child1 = new ChildA();
child1.autoPlay();
const child2 = new ChildB("'Yeah'");
child2.autoPlay();

//The parent class just calls some method of the instance
//If the child class has overridden the method then the child method is called. 

///ASSIGNMENT/////
// Make 2 ES6 classes, where one class extends the other
// class. Then instantiate the child class and call a method
// on that object that is a property of the parent class"