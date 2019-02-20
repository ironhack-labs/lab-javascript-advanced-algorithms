

function StackDataStructure () {
    this.structure = [];
    this.maxLength = 19;
}

StackDataStructure.prototype.addElement = function(element) {
if (!this.isOverFlow()){
    this.structure.push(element);
}  
}

StackDataStructure.prototype.isOverFlow = function() {
    if(this.structure.length >= this.maxLength) {
         alert("Stack is Overflow!")
         return true;
    }

    return false;
}  

StackDataStructure.prototype.removeElement = function() {
    if (!this.isUnderFlow()){
        this.structure.pop();
    }  
    
  }
  StackDataStructure.prototype.isUnderFlow = function() {
     if(this.structure.length == 0 ) {
        alert("Stack is Underflow!")
        return true;
   }

   return false;
  }

//   StackDataStructure.prototype.getElement = function() {
//         return this.structure.slice(-1)[0];

// }



