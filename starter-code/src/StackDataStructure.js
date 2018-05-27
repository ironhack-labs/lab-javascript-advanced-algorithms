function StackDataStructure () {
    this.stackControl = [];
    //tried to make this an argument to avoid "magic number" but didn't work
    this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function() {
    if (this.stackControl.length == 0) {
        return true;
    } else {
        return false;
    }
}

StackDataStructure.prototype.canPush = function() {
    if (this.stackControl.length == this.MAX_SIZE) {
        return false;
    } else {
        return true;
    }
}

 StackDataStructure.prototype.push = function(element) {
    //why can't I use:
    /* if (this.stackControl.length <= this.MAX_SIZE) {
        this.stackControl.push(element);
        return this.stackControl;
    } else {
        return "Stack Overflow";
    } */
    
    // why does Jasmine ask to check MAX_SIZE again here? why can't we just check if canPush() is true?
    if (this.stackControl.length == this.MAX_SIZE) {
        return "Stack Overflow";
    } else {
        this.stackControl.push(element);
        return this.stackControl;
    }

    
} 

StackDataStructure.prototype.pop = function() {
    if (this.stackControl.length == 0) {
        return "Stack Underflow";
    } else {
        return this.stackControl.pop();
    }
    
}
