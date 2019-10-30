class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 9;
    }
    isEmpty() {
        if (this.stackControl == '') return true;
        return false;
    }
    canPush() {
        if (this.stackControl.length != this.MAX_SIZE) return true;
        return false;
    }
    push(elem) {
        if (this.stackControl.length === this.MAX_SIZE) return 'Stack Overflow';
        this.stackControl.push(elem);
        return this.stackControl;   
    }
    pop(){
        if(this.stackControl.length === 0) return 'Stack Underflow';
        return this.stackControl.pop();
    }
}