function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 0;  
}

    
StackDataStructure.prototype.isEmpty = function () {
    if (this.stackControl.length == 0) {
        console.log("Stack Underflow")
        return true;
        }
    else {
        console.log("You still have items")
       return false
    }
}
       
StackDataStructure.prototype.canPush = function () {
    if (this.stackControl.length == this.MAX_SIZE) {
   console.log("Stack Overflow");
   return false;
   
    } else {
    console.log("You can still add something")
    return true;
    }
}
    

StackDataStructure.prototype.push = function(newElement) {
    if (this.canPush = true) {
        this.stackControl.push(newElement);
    }
    return this.stackControl;
}

StackDataStructure.prototype.pop = function () {
    if (this.stackControl.length > 0) {
        this.stackControl.pop();
    }    
    return this.stackControl;
}







