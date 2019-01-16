class StackDataStructure {
    constructor(){
        this.stackControl = [];
        this.MAX_SIZE = Infinity;
    }
    isEmpty(){
        if(this.stackControl.length > 0) return false;
        return true;
    }
    canPush(){
        if(this.stackControl.length === this.MAX_SIZE){
            return false;
        } else
        return true;
    }
    push(element){
        if(this.stackControl.length === this.MAX_SIZE){
            return "Stack Overflow";
        } else {
            this.stackControl.push(element);
            return this.stackControl;
        }
    }
    pop(){
        if(this.stackControl.length === 0) {
            return "Stack Underflow";
        } else {
            return this.stackControl.splice(-1,1)[0];
        }
    }
}
