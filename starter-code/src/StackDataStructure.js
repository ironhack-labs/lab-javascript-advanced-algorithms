
let StackDataStructure = class {
    constructor(stackControl, MAX_SIZE) {
        this.stackControl = [];
        this.MAX_SIZE = 8;
    }

    isEmpty() {
        if (this.stackControl.length == 0) {
            return true
        } else {
            return false
        }
    }

    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) {

            return true
        } else {
            return false
        }
    }

    push(a) {
        if (this.canPush()) {
            this.stackControl.push(a)
            return this.stackControl
        } else {
            return 'Stack Overflow'
        }
    }

    pop() {
        if (this.stackControl.length > 0) {
            return this.stackControl.pop()

        } else {
            return 'Stack Underflow'
        }
    }







}

