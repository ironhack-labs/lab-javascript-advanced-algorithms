class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 10;
    }

    canPush() {
        return this.stackControl.length < this.MAX_SIZE ? true : false
    }

    display() {
        return this.stackControl;
    }

    isEmpty() {
        return this.stackControl.length === 0 ? true : false
    }

    push(item) {
        let initialState = this.canPush()
        if (this.canPush()) this.stackControl.push(item)
        return initialState ? this.stackControl : 'Stack Overflow'

    }

    pop() {
        return this.isEmpty() ? "Stack Underflow" : this.stackControl.pop();
    }
}