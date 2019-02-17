

  function NewQueue() 
  { 
    this.items = []; 
  } 
  
  //has space  ?
  // if is space => push(item) 
  NewQueue.prototype.addElement = function(element) {
  if (this.items.length > 15) {
    return "Overflow"; 
  } else {
    this.items.unshift(element); 
  }   
  }
 

  // is anything in (not empty) isEmpty() ?
  NewQueue.prototype.removeLastElement = function() { 
    // return true if stack is empty 
    if (this.items.length == 0){
      return "Underflow"
    } else {
      return this.items.pop(); 
    }
  } 

