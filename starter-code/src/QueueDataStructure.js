function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty = function(){
        if (this.queueControl.length==0){
            return true;
        }
        if (this.queueControl.length>0){
            return false;
        }
     }
    this.canEnqueue = function(){
        if (this.queueControl.length<this.MAX_SIZE){
            return true;
            }
        else {
            return false
            }
        }
    this.enqueue = function(arg){
        if (this.queueControl.length >= this.MAX_SIZE){
            return  'Queue Overflow';
             }
            else {
            this.queueControl.unshift(arg);
            return this.queueControl;
             }
        }
    this.dequeue = function(){
        if (this.queueControl.length <=0 ){
            return  'Queue Underflow';
            }
            else {
            return this.queueControl.pop();
            }
        }

}
