class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 10;
    }

    isEmpty(){
        if (this.stackControl.length === 0){
            return true
        } else {
            return false
        }
    }

    canPush(){
        if (this.MAX_SIZE === this.stackControl.length){
            return false
        } else {
            return true
        }
    }

    push(elem){
        if (this.stackControl.length === this.MAX_SIZE){
            return `Stack Overflow`
        } else {
            this.stackControl.push(elem)
        } return this.stackControl
    }

    pop(elem){
        if (this.stackControl.length === 0){
            return `Stack Underflow`
        } else {
            return this.stackControl.pop(elem)
        }
    }


}