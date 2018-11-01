function StackDataStructure (stackControl) {
    this.stackControl=[];
    this.MAX_SIZE=-1;
}
StackDataStructure.prototype.isEmpty = function(){
    if(this.stackControl.length===0)return true;
    return false;

}

StackDataStructure.prototype.push = function(elemento){
if(this.stackControl.length===this.MAX_SIZE)return "Stack Overflow";
this.stackControl.push(elemento)
return this.stackControl;

}
StackDataStructure.prototype.pop = function(elemento){
   if (this.stackControl.length===0) return "Stack Underflow";
   return this.stackControl.pop()
}
StackDataStructure.prototype.canPush = function() {
    if(this.stackControl.length===this.MAX_SIZE)return false;
    return true;
};
