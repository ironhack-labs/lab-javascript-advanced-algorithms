function QueueDataStructure () {

  this.queueControl = [];
  this.MAX_SIZE = 0;

  this.isEmpty = function(){
    if(this.queueControl > 0){
      return false
    }
    return true;
  }

  this.canEnqueue = function(){
    if(this.MAX_SIZE > this.queueControl.length){
      return false
    }
return true;
  }

    this.enqueue = function(element){
//AÑADIR ELEMENTOS
      if(this.queueControl.length > this.MAX_SIZE ){
        console.log("Limite")
        return 'Queue Overflow'
          }

          
      this.queueControl.push(element);
      console.log(this.queueControl)
    return [this.queueControl[this.queueControl.length-1]]

    
    
  }

  this.dequeue = function(){

    console.log("Entro a borrar")

    if(this.queueControl.length == 0){
    return 'Queue Underflow'

  }

  this.queueControl.splice(0,1);
  console.log(this.queueControl)

    return this.queueControl[this.queueControl.length-1];

  }
}
