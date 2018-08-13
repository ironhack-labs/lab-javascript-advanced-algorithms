// function StackDataStructure () {
//     this.stackControl = [];
//     this.MAX_SIZE = 20;
// }

class StackDataStructure {
    constructor(MAX_SIZE) {
        this.stackControl = [];
        this.MAX_SIZE = MAX_SIZE;
    }
    
    isEmpty(){
        return this.stackControl.length === 0;
    }
    canPush(){
        return this.stackControl.length < this.MAX_SIZE;
      
    }
    push(element){
        if ( this.canPush() ) {
            this.stackControl.push(element);
            return this.stackControl;
        }
        else {
            return 'Stack Overflow';
        }
    }

    pop(){
        if (this.stackControl.length === 0){
            return 'Stack Underflow';
        }
        return this.stackControl.pop();
    }

}