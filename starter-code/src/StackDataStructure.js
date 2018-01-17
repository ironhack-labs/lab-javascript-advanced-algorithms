function StackDataStructure () {
   
    this.stackControl = [];
    this.MAX_SIZE = 8;

}

StackDataStructure.prototype.isEmpty = function(){

    return (this.stackControl.length == 0);

}

StackDataStructure.prototype.canPush = function(){

   return (this.stackControl.length < this.MAX_SIZE);
}

StackDataStructure.prototype.push = function(elemento){
  
    if(this.canPush()){
     
      this.stackControl.push(elemento);
      return this.stackControl;

    }else{

      return 'Stack Overflow';

    }

  
}

StackDataStructure.prototype.pop = function(){

      if(this.isEmpty()){
        return 'Stack Underflow';
      }else{
        return this.stackControl.pop();//this.stackControl[this.stackControl.length - 1];
      }
}



