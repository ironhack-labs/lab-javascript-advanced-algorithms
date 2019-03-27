class StackDataStructure {
    constructor(){
        this.stackControl = [];
        this.MAX_SIZE = 8;
    }

    isEmpty() {
        return this.stackControl.length === 0
    }

    canPush() {
        return this.stackControl.length < this.MAX_SIZE;
    }
    
    push(elem) {
        if (this.canPush()) {
            this.stackControl.push(elem)
            return this.stackControl
                }
            return "Stack Overflow"; 
        }

    pop(elem) {
        if (this.isEmpty()) {
            return "Stack Underflow"
        }
        return this.stackControl.pop(elem)
    }

}

   
