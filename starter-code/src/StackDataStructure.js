function StackDataStructure() {

    this.stackControl = [];
    this.MAX_SIZE = 8;

    this.isEmpty = function () {

        if (this.stackControl.length > 0) {
            return false;
        } else {
            return true;
        }
    };

    this.canPush = function () {
 
        if (this.stackControl.length >= this.MAX_SIZE) {
            return false;
        } else {
            return true;
        }
    };


    this.push = function (element) {
        
        if (this.canPush()) {
            this.stackControl.push(element);
            return this.stackControl;
        } else {
            return "Stack Overflow";
        }
    };

    this.pop = function (element) {
        if (this.stackControl.length === 0) {
            return "Stack Underflow";
        }
        return this.stackControl.pop(element);
        
    };





}



