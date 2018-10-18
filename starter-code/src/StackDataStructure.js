class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 10;
    }
    isEmpty() {
        if (this.stackControl.length > 0) return false;
        return true;
    }

    canPush(item) {
        if (this.MAX_SIZE >= 10) return true;
        return false;
    }

    push(item) {
        if (this.canPush()) {
            this.stackControl.push(item);
            return this.stackControl;
        } else {
            return "Stack Overflow";
        }
    }
    
    pop() {
        if(this.isEmpty()) {
            return "Stack Underflow"; 
        } else {
            let last = this.stackControl[this.stackControl.length-1]; 
            this.stackControl.pop();
            return last;
        }
    }

    // give(item) {
    //     (this.array.length >= 10) ? console.log("Stack Overflow") : this.array.push(item);
    //     return this.array;
    // }

    // take() {
    //     (this.array.length <= 0) ? console.log("Stack Underflow") : this.array.pop();
    //     return this.array;        
    // }
}

class QueueDataStructure {
    constructor() {
        this.queue = [];
        this.MAX_SIZE = 10;
    }

    give(item) {
        (this.array.length >= 10) ? console.log("Stack Overflow") : this.array.unshift(item);
        return this.array;
    }

    take() {
        (this.array.length <= 0) ? console.log("Stack Underflow") : this.array.pop();
        return this.array;        
    }
}

var stack = new StackDataStructure();
