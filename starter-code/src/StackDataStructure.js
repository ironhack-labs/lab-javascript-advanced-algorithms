class StackDataStructure {
    constructor(){
        this.stackControl = [],
        this.MAX_SIZE = 8
    }

    isEmpty(){
        if(this.stackControl.length == 0){
            return true
        } else {
            return false
        }
    }

    canPush(){
        if(this.stackControl.length < this.MAX_SIZE){
            return true
        } else{
            return false
        }
    }

    push(elem){
        //Should return that stack is not empty when adding an element
        //Should return 'Stack Overflow' if the stack is full
        //Should return false if the stack is full
        if(this.canPush()){
        this.stackControl.push(elem)
        return this.stackControl
        }else {
            return 'Stack Overflow'
        }
    }
    pop(){
        if(this.isEmpty()){
            return 'Stack Underflow'
        }else{
            return this.stackControl.pop()
        }
    }

}
