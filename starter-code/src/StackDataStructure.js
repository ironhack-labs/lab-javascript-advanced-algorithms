class StackDataStructure {
    constructor(){
        this.stackControl = [];
        this.MAX_SIZE = 8;
    }
    isEmpty() {
        if (this.stackControl.length === 0) return true;
        return false;
    }
    canPush(){
        if (this.stackControl.length < this.MAX_SIZE) return true;
        else return false;
    }
    push(element) {
        if (this.canPush()){
            this.stackControl.push(element);
            return this.stackControl;
        }
        else return "Stack Overflow";
    }
    pop(){
        if (this.isEmpty()) return "Stack Underflow";
        return this.stackControl.pop();
    }
}
