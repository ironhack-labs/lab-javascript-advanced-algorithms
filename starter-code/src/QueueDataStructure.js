function QueueDataStructure () {
   this.queueControl =[];
   this.MAX_SIZE=10;
//---------------------------------functions----------------------------------//
////////////////////////////////////////////////////////////////////////////////
this.isEmpty = function(){
 if (0 === this.queueControl.length){
   return true;
 } else if (this.queueControl.length >= 1){
   return false;  }};

   this.canEnqueue = function(){
     if (this.queueControl.length >= this.MAX_SIZE){
        return false;
     }  return true; };

     this.enqueue = function(element){
       if (this.canEnqueue() === true){
         this.queueControl.unshift(element);
         return this.queueControl; } else {
           return "Queue Overflow";
         }
       };

       this.dequeue = function(){
         if (this.isEmpty() === true){
           return "Queue Underflow";
         }
         return this.queueControl.shift();
         };
}
