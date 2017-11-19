function StackDataStructure () {

    this.stackControl = [];
    this.MAX_SIZE = 20;
    
}

StackDataStructure.prototype.isEmpty = function(){
  return (this.stackControl.length > 0) ? false : true;
}

StackDataStructure.prototype.canPush = function(){
    if(this.stackControl.length < this.MAX_SIZE)
    {   
        return true;
    }
    else return false;
}

StackDataStructure.prototype.push = function(newEle){
    if ( this.canPush() ){
        this.stackControl[this.stackControl.length] = newEle;
        return this.stackControl;

    } else return "Stack Overflow";

}

StackDataStructure.prototype.pop = function(){

    if ( !this.isEmpty() ){
        element = this.stackControl[this.stackControl.length-1];
        this.stackControl.splice(-1,1);
        return element;

    } else return "Stack Underflow";
}

