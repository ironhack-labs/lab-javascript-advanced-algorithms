class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 10;
    }
    isEmpty() {
        return this.stackControl.length === 0;
    }
    canPush() {
        return this.stackControl.length < this.MAX_SIZE;
    }
    push(el) {
        if (this.canPush() === true) {
            this.stackControl.push(el);
            return this.stackControl            
        }
        else { return 'Stack Overflow' }        
    }
    pop() {
        if (this.isEmpty() === false) {
            return this.stackControl.pop();    
        }
        else { return 'Stack Underflow' }    
    }
}