function StackDataStructure () {
    this.stackControl=[];
    this.MAX_SIZE=10; 
};

StackDataStructure.prototype.isEmpty=function(){
    if(this.stackControl.length === 0){
    return true;
    }
    else{
        return false;
    }
 };

 StackDataStructure.prototype.canPush=function(){
    if(this.stackControl.length===this.MAX_SIZE){
       return false;
    }
return true; 
       
 };

 StackDataStructure.prototype.push=function(a){
    if(this.stackControl.length === this.MAX_SIZE){
        return 'Stack Overflow'; 
    }else{
        this.stackControl.push(a);
        return this.stackControl;
    }
};

StackDataStructure.prototype.pop=function(){
 if(this.stackControl.length===0){
return "Stack Underflow";
}
return this.stackControl[this.stackControl.length-1];
 
};

