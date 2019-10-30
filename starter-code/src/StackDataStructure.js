class StackDataStructure{
    constructor(){
        this.stackControl = [];
        this.MAX_SIZE = 8;  
    };
    isEmpty(){
        if(this.stackControl.length === 0) return true;
        return false;

    }
    canPush(){
        if(this.stackControl.length >= this.MAX_SIZE){
            return false;
        }return true;

    }

    push(val){
        
        if(this.stackControl.length >= this.MAX_SIZE){
            return "Stack Overflow";

        }else{
            this.stackControl.push(val)
            return this.stackControl
        }
    }
    pop(){
        if(this.stackControl.length  === 0){
            return "Stack Underflow";
        }return this.stackControl.pop();
    }
}

// function StackDataStructure () {

    
// }