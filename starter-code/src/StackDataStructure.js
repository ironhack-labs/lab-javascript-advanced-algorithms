function StackDataStructure () {
    
    this.stackControl = [];  
    this.MAX_SIZE = 8;
     

    this.isEmpty = function() {
        if (this.stackControl.length === 0){
            return true;
        }else {
            return false;
        }
    }; 

    this.canPush = function() {
        if (this.stackControl.length < this.MAX_SIZE){
            return true;
        }else {
            return false;
        }
    };
    this.push = function (newElement) {
        if (this.canPush()){
            this.stackControl.push(newElement)
            return this.stackControl;
        }
            return "Stack Overflow";
    };
    this.pop = function () {
        if (this.isEmpty()){
            return "Stack Underflow";
        }            
            return this.stackControl.pop();
    };
}