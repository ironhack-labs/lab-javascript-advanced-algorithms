class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 10;
    }

    isEmpty() {
        return this.stackControl.length === 0 ? true : false
        // if (this.stackControl.length === 0) {
        //     return true
        // } else
        //     return false
    }


    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true
        } else
            return false
    }


    push(elm) {
        if (this.canPush()) {
            this.stackControl.push(elm)
            return this.stackControl
        } else if (this.stackControl.length === this.MAX_SIZE) {
            return "Stack Overflow"
        }
    }


    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow"
        } else {
            return this.stackControl.pop()
        }
    }
}



