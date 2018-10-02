function StackDataStructure () {
    this.stackSize = [];
    this.maximumSize = 9;
}

StackDataStructure.prototype.isEmpty() = function() {
    if(this.stackSize.length === 0){
        return true;
    }else {
        return false;
    }
}

StackDataStructure.prototype.canPush() = function() {
    if( this.isEmpty() || this.stackSize.length < this.maximumSize){
        return true;
    }else{
        return false;
    }
}
StackDataStructure.prototype.push = function(e) {
    if(this.stackSize.length >= this.maximumSize){
        return "StackOverflow"
    } else {
      this.stackSize.push() 
    }
    return this.stackSize;

}

StackDataStructure.prototype.pop = function(e) {
   if (this.isEmpty()) {
       return "stackUnderflow"
   } else {
    return this.stackSize.pop();
   }
     
}