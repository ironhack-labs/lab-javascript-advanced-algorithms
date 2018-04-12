
function StackDataStructure(){
  this.stackControl = [];
  this.MAX_SIZE = 10;
  var stack = [];

  this.isEmpty = function(){
  	return this.stackControl.length === 0;
  };

  this.canPush = function(){
    return this.stackControl.length +1 <= this.MAX_SIZE;
  };
  
  this.push = function(val){
    if (this.canPush()){
  		this.stackControl.push(val);
  		return this.stackControl;
  	}
    return 'Stack Overflow';
  };
  
  this.pop = function(){
  	if (this.stackControl.length > 0)
  	  return this.stackControl.pop();
  		return 'Stack Underflow'
  };
       
};
    

