
function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 6;
};
StackDataStructure.prototype.isEmpty = function (){
    if (this.stackControl.length === 0) {
        return true
    } else {
        return false
    }
};

StackDataStructure.prototype.canPush = function () {
    if (this.stackControl.length < this.MAX_SIZE) {
        return true
    } else {
        return false
    }
};

StackDataStructure.prototype.push = function(elemento){
    if (this.canPush()) {
        this.stackControl.push(elemento);
        return this.stackControl;
    } else {
        return 'Stack Overflow'
    }
};

StackDataStructure.prototype.pop = function (){
        if (this.isEmpty()) {
            return "Stack Underflow"
        } else {
            return this.stackControl.pop();
        }
    };


