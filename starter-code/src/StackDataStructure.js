class StackDataStructure {

    constructor(){
        this.stackControl = []
        this.MAX_SIZE = 8
    }

    //métodos
    isEmpty(){
        if(this.stackControl.length === 0){
            return true
        }
        else{
            return false
        }
    }

    canPush(){
        if(this.stackControl.length < this.MAX_SIZE){
            return true
        }else{
            return false
        }

    }

    push(element){
        if(this.canPush()){
            this.stackControl.push(element)
            return this.stackControl
        }
        else{
            return 'Stack Overflow'
        }
    }

    pop(){
        if(!this.isEmpty()){ //si está lleno, por eso se niega
            return this.stackControl.pop()
        }
        else{
            return 'Stack Underflow'
        }

    }
}