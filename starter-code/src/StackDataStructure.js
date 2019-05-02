function StackDataStructure() {

    constructor(stack) {
        this.MAX_SIZE = 100;
        this.stackControl = [];
    }
    push(ele) {
        this.stackControl.push(ele);
    }

    pop() { }

    isEmpty() {
        if (this.stackControl.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true;
        } else {
            return false;
        }
    }
}


