function StackDataStructure (max) {

    // properties of the constructor function
    this.stackControl = [];
    this.MAX_SIZE = max;

}

StackDataStructure.prototype.isEmpty = function(){
    return this.stackControl.length == 0;
}


StackDataStructure.prototype.canPush = function(){
    return this.MAX_SIZE > this.stackControl.length;
}

StackDataStructure.prototype.push = function(arr){
    if (!this.canPush()) return false;
    this.stackControl.push(arr);
    return this.stackControl;
}


StackDataStructure.prototype.pop = function(){
    if (this.isEmpty()) return false
    return this.stackControl.pop();
}




