class StackDataStructure {
    constructor(){
        this.stackControl = [];
        this.MAX_SIZE = 10;
    }

    isEmpty(){
        if(this.stackControl.length === 0){
            return true;
        } else {
            return false;
        }
    }

    canPush(){
        if (this.MAX_SIZE === this.stackControl.length) {
            return false;
        } else{
            return true;
        }
    }

    push(element){
        if (this.MAX_SIZE === this.stackControl.length){
            return "Stack Overflow"
        } else {
            this.stackControl.push(element)
        }
        return this.stackControl
    }

    pop(){
        if(this.stackControl.length === 0){
            return 'Stack Underflow'
        } else {
            this.stackControl.pop()
        }
    }
}
