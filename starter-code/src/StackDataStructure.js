class StackDataStructure {
    constructor(size){
        this.MAX_SIZE = size || 19;
        this.stackControl = [];
    }

    getLength(){
        return this.stackControl.length
    }

    isEmpty(){
        return this.stackControl.length === 0
    }
    isFull(){
        return this.stackControl ===  this.MAX_SIZE
    }

    canPush(){
        return this.stackControl.length < this.MAX_SIZE
    }

    push(e){
        if(this.canPush()){
            this.stackControl.push(e);
            return this.stackControl;
        }else{
            return 'Stack Overflow'
        }
    }

    pop(){
        if(!this.isEmpty()){
            return this.stackControl.pop()
        }else{
            return 'Stack Underflow'
        }
    }

}

