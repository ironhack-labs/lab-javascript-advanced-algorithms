function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function(){
    var result = this.stackControl.length === 0 ? true : false;
    return result;
  }

  this.canPush = function(){
    var result = this.stackControl.length === this.MAX_SIZE ? false : true;
    return result;
  }

  this.push = function(element){
    if(this.canPush()){
      this.stackControl.push(element);
      return this.stackControl;
    } else {
      return 'Stack Overflow';
    }
  }

  this.pop = function(){
    if(this.isEmpty()){
      return 'Stack Underflow'
    } else {
      var ultimo = this.stackControl.pop();
      return ultimo;
    }
  }
}
