function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function () {
    if (typeof this.stackControl !== 'undefined' && this.stackControl.length > 0) {
        return false;
    }
    return true;
}

StackDataStructure.prototype.canPush = function () {
    if (this.stackControl.length == this.MAX_SIZE) {
        return false;
    }
    return true;
}

StackDataStructure.prototype.push = function (elem) {
   if(this.canPush()){
       this.stackControl.push(elem);
       return this.stackControl;
   }else{
       return "Stack Overflow";
   }
       
}

StackDataStructure.prototype.pop = function (elem) {
    if(this.isEmpty()){
        return 'Stack Underflow';
    }else{
        return this.stackControl.pop(elem);  
    }   
}

