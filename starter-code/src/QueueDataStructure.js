
function QueueDataStructure (stackControl) {
    this.queueControl=[];
    this.MAX_SIZE=10;
}
QueueDataStructure.prototype.isEmpty = function(){
    if(this.queueControl.length===0)return true;
    return false;

}

QueueDataStructure.prototype.enqueue = function(elemento){
if(this.queueControl.length===this.MAX_SIZE)return "Queue Overflow";
this.queueControl.unshift(elemento)
return this.queueControl;

}
QueueDataStructure.prototype.dequeue= function(elemento){
   if (this.queueControl.length===0) return "Queue Underflow";
   return this.queueControl.pop()
}
QueueDataStructure.prototype.canEnqueue= function() {
    if(this.queueControl.length===this.MAX_SIZE)return false;
    return true;
};
