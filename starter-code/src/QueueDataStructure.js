function QueueDataStructure () {
    this.structure = [];
    this.maxLength = 19;
}

QueueDataStructure.prototype.addElement = function(element) {
if (!this.isOverFlow()){
    this.structure.unshift(element);
}  
}

QueueDataStructure.prototype.isOverFlow = function() {
    if(this.structure.length >= this.maxLength) {
         alert("Queue is Overflow!")
         return true;
    }

    return false;
}  

QueueDataStructure.prototype.removeElement = function() {
    if (!this.isUnderFlow()){
        this.structure.shift();
    }  
    
  }
  QueueDataStructure.prototype.isUnderFlow = function() {
     if(this.structure.length == 0 ) {
        alert("Queue is Underflow!")
        return true;
   }

   return false;
  }       

 