function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE= 8;
}

StackDataStructure.prototype.isEmpty =function(){
    return this.stackControl.length === 0;
  };

StackDataStructure.prototype.canPush = function(){
    if (this.stackControl.length==this.MAX_SIZE){
      return false;}
      else{return true;}
    };

StackDataStructure.prototype.push = function(i){
    if (this.canPush()){
      this.stackControl.push(i);
      return this.stackControl;
      }
    else{
      return "Stack Overflow";
      }
      };

StackDataStructure.prototype.pop = function(){
    var len= this.stackControl.length;
    if(this.isEmpty()){
      return 'Stack Underflow';
        }
      else{return this.stackControl[len-1];}
      };
