function StackDataStructure () {

  this.stackControl =[];
  this.MAX_SIZE= 19;
  
  this.isEmpty= function(){

    if(this.stackControl.length===0){
      return  false
    }
    else{
      return true
    }
  }
  this.canPush= function(){
    if(this.MAX_SIZE<=this.stackControl.length){
      return true
    }
    else {
      return false
    }
  }
  this.push = function(){
    if (this.canPush()){
      this.stackControl.push();
      return this.stackControl;
    }
    else{
      return false
    }
  }
 this.pop= function(){
   


 }



}