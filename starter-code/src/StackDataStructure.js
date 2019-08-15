

function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.MIN_SIZE = 2;
}

StackDataStructure.prototype.isEmpty = function() {
    return this.stackControl.length === 0;
    
    // if(this.stackControl.length === 0) return true;
    // else return false;
    
}

StackDataStructure.prototype.canPush = function() {
    if(this.stackControl.length < this.MAX_SIZE && this.stackControl.length < this.MIN_SIZE) {
        return true;
    }
    return false;
}

StackDataStructure.prototype.push = function(pushToArray) {
    if(this.canPush() === true) {
        this.stackControl.push(pushToArray);
        return this.stackControl;
    }
    else return 'Stack Overflow';
}

StackDataStructure.prototype.pop = function() {
    if( this.stackControl.length < this.MIN_SIZE) {
        return 'Stack Underflow';
    }
    return this.stackControl.pop()
}


console.log(stack.isEmpty());
console.log(stack.canPush());
console.log(stack.push('hello'));
console.log(stack.pop());
console.log('--Stack--');
