// function StackDataStructure () {
// }


class StackDataStructure{
    constructor(){
        this.stackControl = [];
        this.MAX_SIZE = 8;
    }

    isEmpty(){
        if(this.stackControl.length===0){
            return true;
        }
        else{
            return false;
        }
    }

    canPush(){
        if(this.stackControl.length===this.MAX_SIZE){
            return false;
        }
        else{
            return true;
        }
    }

    push(ele){
        if(this.canPush()){
            this.stackControl.push(ele);
            return this.stackControl;
        }
        else{
            return "Stack Overflow";
        }
    }

    pop(ele){
        if(!this.isEmpty()){
            return this.stackControl.pop(ele);
        }
        else{
            return "Stack Underflow";
        }
    }



}