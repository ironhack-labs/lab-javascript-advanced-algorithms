class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 8;
    }

    isEmpty() {
        return (this.stackControl.length === 0) ? true : false;
    }

    canPush() {
        return (this.stackControl.length >= this.MAX_SIZE) ? false : true;
        
    }

    push(element) {
        this.stackControl.push(element);
        return (!this.canPush()) ? "Stack Overflow" : this.stackControl;
    }

    pop() {
        return this.isEmpty() ? "Stack Underflow" : this.stackControl.pop();
        
    }


}    
