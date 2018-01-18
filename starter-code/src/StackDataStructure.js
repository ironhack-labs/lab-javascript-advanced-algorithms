
// First Create a Stack

function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 5;
}

// Method to check if stack is empty
StackDataStructure.prototype.isEmpty = function () {
    if (this.stackControl.length == 0) {
        return true;
    } else {
        return false;
    }
}

// Method to check if stack is empty
StackDataStructure.prototype.canPush = function () {
    if (this.stackControl.length < this.MAX_SIZE) {
        return true;
    } else {
        return false;
    }
}

// Method to add a value onto the END of the stack
StackDataStructure.prototype.push = function (number) {
    if (this.canPush()==false) {
        return 'Stack Overflow'; }
    else {
        this.stackControl.push(number); 
        return this.stackControl;}
    
    
}



// Method to REMOVE a value at the END of the stack
StackDataStructure.prototype.pop = function () {
    if (this.stackControl.length == 0) {
        return 'Stack Underflow'; }
    else {
 
        return this.stackControl.pop(this.stackControl[this.stackControl.length -1]);
    }
}