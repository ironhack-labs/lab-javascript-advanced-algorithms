function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function(){
    if (this.stackControl.length === 0){
        return true;
    } else {
        return false;
    }
  }

  StackDataStructure.prototype.canPush = function(){
    if (this.stackControl.length === this.MAX_SIZE){
        return false;
    } else {
        return true;
    }
  }

  StackDataStructure.prototype.push = function(element){
    if (this.canPush()){
       this.stackControl.push(element);
       return this.stackControl;
    } else {
       return "Stack Overflow";
    }
  }

  StackDataStructure.prototype.pop = function(){
    if (!this.isEmpty()){
        var last = this.stackControl[this.stackControl.length-1];
        console.log("hola " + last);
        this.stackControl.pop();
        return last;
    } else {
        return "Stack Underflow";
    }
  }




