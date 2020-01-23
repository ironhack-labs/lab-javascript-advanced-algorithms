
class StackDataStructure{
    constructor(){
        this.stackControl = [];
        this.MAX_SIZE = 10

    }

    isEmpty(){
        if (this.stackControl.length) {
            return false
        } else {
            return true
        }

    }


    canPush(){
        if (this.stackControl.length < this.MAX_SIZE){
            return true
        }else{ 
            return false
        }
    }


    push(item){

        if(this.canPush()){

        this.stackControl.push(item)
        return this.stackControl

        }else{

            return "Stack Overflow"
        }

    }

    pop(item){

        if(this.isEmpty() == true){

            return "Stack Underflow"

        }else{

            return this.stackControl.pop()}


    }




}

