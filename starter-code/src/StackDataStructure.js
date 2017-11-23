
  function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  StackDataStructure.prototype.isEmpty = function(){
    return this.stackControl.length === 0 ? true : false;
  };

  StackDataStructure.prototype.canPush = function () {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  };


  StackDataStructure.prototype.push = function(item){
    if (this.canPush() ){
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      return 'Stack Overflow';
    }
  };

  StackDataStructure.prototype.pop = function(){
  if (this.isEmpty()) {
   return 'Stack Underflow';
   } else {
   return this.stackControl.pop();
   }
   };
