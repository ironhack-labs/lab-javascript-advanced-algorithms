function StackDataStructure () {
    this.stackControl = new Array();
    this.MAX_SIZE = 10;
    this.isEmpty = function(){
        return (this.stackControl.length == 0) ? true : false;
    }
    this.canPush = function(){
        return (this.stackControl.length < this.MAX_SIZE) ? true : false;
    }
    this.push = function(element){
        return (this.stackControl.length < this.MAX_SIZE) ?
        (this.stackControl.push(element), this.stackControl) : "Stack Overflow";
    }
    this.pop = function(){
        return (this.stackControl.length) ? 
        (this.stackControl[this.stackControl.length-1], this.stackControl.pop()) : 'Stack Underflow';
    }
}