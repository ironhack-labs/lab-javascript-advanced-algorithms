class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 6;
    }
    
    isEmpty() {
        if(this.stackControl.length === 0) {
            return true;
        }
        return false;
    }

    canPush() {
        if(this.stackControl.length < this.MAX_SIZE) {
            return true;
        }
        return false;
    }

    push(elem) {
        if(this.canPush() === true) {
            this.stackControl.push(elem);
            return this.stackControl;
        } else {
            return 'Stack Overflow';
        }
    }

    pop() {
        if(this.stackControl.length === 0) {
            return 'Stack Underflow';
        } else {
            return this.stackControl.pop();
        }
        
    }

}


