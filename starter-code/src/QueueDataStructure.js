function QueueDataStructure () {
   this.queueControl=[];
   this.MAX_SIZE=25;
   this.isEmpty=function(){
     return this.queueControl.length==0 ? true : false;
   };
   this.canEnqueue=function(){
  return this.QueueControl.length==this.MAX_SIZE ? false : true;
   };

     this.push=function(element){
     var m=this.QueueControl.length;
     this.stackQueueControl[m]=element;
     return this.QueueControl;

      };
      this.pop= function(){};
     var m=this.QueueControl[this.QueueControl.length];

     return this.QueueControl.pop();
  }
