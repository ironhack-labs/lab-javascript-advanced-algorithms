class StackDataStructure {
    constructor() {
        //array with fixed length;
        this.stackControl = [];
        this.MAX_SIZE = 5;
    }
    isEmpty() {
        if(this.stackControl[0]===undefined) {
            // console.log('This stack is empty.');
            return true;
        } else {
            // console.log('This stack has something.');
            return false;
        }
    }
    canPush() {
        if(this.stackControl.length === this.MAX_SIZE) {
            // console.log('This stack is full.');
            return false;
        } else {
            // console.log('can push element in this stack.');
            return true;
        }
    }
    push(element) {
        if(this.canPush()) {
            this.stackControl.push(element);
            return this.stackControl;
        } else {
            return 'Stack Overflow';
        }
        
    }
    pop() {
        if(!this.isEmpty()) {
            return this.stackControl.pop();
        } else {
            return 'Stack Underflow';
        }
        
    }
}
