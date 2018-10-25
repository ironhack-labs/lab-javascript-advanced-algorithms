function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function(){
    if (this.stackControl > 0) {
        return false;
    }
    else {
        return true;
    }
}

StackDataStructure.prototype.canPush = function() {

    if (this.stackControl.length < this.MAX_SIZE) {
        return true;
    }
    else {
        return false;
    }
}

StackDataStructure.prototype.push = function(num) {
    if (this.stackControl.length < this.MAX_SIZE) {
        this.stackControl.push(num);
        return this.stackControl;
    } else {
        return "Stack Overflow"
    }
}

StackDataStructure.prototype.pop = function() {
    if (this.stackControl.length > 0) {
            return this.stackControl.pop();
    } else {
        return "Stack Underflow"
    }
}



