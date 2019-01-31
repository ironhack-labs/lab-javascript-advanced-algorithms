
class StackDataStructure {
    constructor(){
        this.stackControl = [];
        this.MAX_SIZE = 10;
    }  

    isEmpty(){
        if(this.stackControl.length == 0){
            return true;
        }else{
            return false;
        }
    };

    canPush(){
        if(this.stackControl.length >= 0 && this.stackControl.length < this.MAX_SIZE){
            return true;

        }else if(this.stackControl.length === this.MAX_SIZE) {
            return false;

        }else{
            return false;
        }
     };

    push(element){
        let pushCondition = this.canPush();
        if(pushCondition == true){
            this.stackControl.push(element);
        }else{
            return "Stack Overflow"
        }
        return this.stackControl
      };

    pop(){
        let popCondition = this.isEmpty();
        if(popCondition == false){
            return this.stackControl.pop();
        }else{
            return 'Stack Underflow'
        }
     };
}
