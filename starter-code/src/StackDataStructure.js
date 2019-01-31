class StackDataStructure {

    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 8;
    }

    isEmpty() {
        return !this.stackControl.length
    }

    canPush() {
        return this.stackControl.length < this.MAX_SIZE
    }

    push(item) {
        
        if (this.canPush()) {
            this.stackControl.push(item)
            return this.stackControl;
        }

        return 'Stack Overflow';
    }

    pop() {
        
        if (this.isEmpty()) {
            return 'Stack Underflow'
        }

        return this.stackControl.pop()
    }
}
