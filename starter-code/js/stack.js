

function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 0;
}

StackDataStructure.prototype.isEmpty = function() {
    // check the array if the array is empty
    return this.stackControl.length === 0;
    // if(this.stackControl.length === 0) return true;
    // else return false;
    
}

StackDataStructure.prototype.canPush = function() {
    // check if it is possible to push something to the array
    if(this.stackControl.length === this.MAX_SIZE) {
        return true;
    }
    else return this.push();
}

StackDataStructure.prototype.push = function(pushToArray) {
// push() elements to the array
    this.stackControl.push(pushToArray);
}

StackDataStructure.prototype.pop = function(popToArray) {
// pop() elements out of the array
    this. stackControl.pop(this.popToArray)
}

const stack = new StackDataStructure();

console.log(stack.isEmpty());
console.log(stack.canPush());
console.log(stack.push(''));
console.log(stack.pop());

