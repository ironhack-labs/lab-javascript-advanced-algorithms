class StackDataStructure {
    constructor(num) {
        this.stackControl = [];
        this.MAX_SIZE = 10;
    }
    // isEmpty() {
    //     if (this.stackControl.length > 0) return false;
    //     return true;
    // }

    // canPush(item) {
    //     if (this.MAX_SIZE >= 10) return true;
    //     return false;
    // }
     isEmpty() {
     return this.stackControl.length > 0 ?  false : true;
    }

    canPush(item) {
     return this.MAX_SIZE >= 10 ?  true :false;
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
}