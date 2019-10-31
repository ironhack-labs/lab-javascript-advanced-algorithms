class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE =11
    }
    isEmpty(){
        return this.stackControl.length ? false : true
         
    }
    canPush(){
        return this.stackControl.length==this.MAX_SIZE ? false :true
    }
    push(elm){
        if (this.canPush()){
            this.stackControl.push(elm)
        return this.stackControl
        } else return 'Stack Overflow'
    }
    pop(){
        return this.isEmpty() ? 'Stack Underflow' :this.stackControl.pop()
      
    }

}

//const stackDataStructure = new StackDataStructure()