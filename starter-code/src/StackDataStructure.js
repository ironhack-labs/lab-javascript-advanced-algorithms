function StackDataStructure () {

  this.stackControl  = []
  this.MAX_SIZE = 8

  this.isEmpty = function () {
    return this.stackControl.length === 0
  }
  this.canPush = function () {
     return this.stackControl.length < this.MAX_SIZE
      
    
    
  }
   this.push = function (item) {
    //  this.stackControl.push()
    //  return stackControl
    if (!this.canPush()) {
       return 'Stack Overflow'
      
    } else {
       this.stackControl.push(item)
      return this.stackControl
    }
   }

   this.pop = function (element) {
     //  return stackControl
     if (this.isEmpty()) {
       
       
      return 'Stack Underflow'
     
   } else {
     return this.stackControl.pop(element)
     
   }
   }
  

  

}


  this.queueControl  = []
  this.MAX_SIZE = 8

  this.isEmpty = function () {
    return this.queueControl.length === 0
  }
  this.canPush = function () {
     return this.queueControl.length < this.MAX_SIZE
      
    
    
  }
   this.push = function (item) {
    //  this.stackControl.push()
    //  return stackControl
    if (!this.canPush()) {
       return 'Stack Overflow'
      
    } else {
       this.stackControl.push(item)
      return this.stackControl
    }
   }

   this.pop = function (element) {
     //  return stackControl
     if (this.isEmpty()) {
       
       
      return 'Stack Underflow'
     
   } else {
     return this.stackControl.pop(element)
     
   }
   }
  

  

