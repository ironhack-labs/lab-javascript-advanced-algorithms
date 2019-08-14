

function StackDataStructure () {
this.stackMin = 0 ;
this.MAX_SIZE = 10;
this.currentStack = 0;
this.stackControl = [];
//  addEventListener.onclick(currentStack += 1)
}


StackDataStructure.prototype.push= function(content){
    if(this.currentStack === this.MAX_SIZE){
        return "Stack Overflow";
    }
    if(this.currentStack < this.MAX_SIZE){
    this.stackControl.push(content);
    this.currentStack += 1 ; 
    return this.stackControl;
    
    }
    
}

StackDataStructure.prototype.pop = function(){
if(this.currentStack === this.stackMin){
    return "Stack Underflow";
}
if (this.currentStack > this.stackMin){
    this.currentStack -= 1;
    return this.stackControl.pop();

}
    
}

StackDataStructure.prototype.isEmpty = function(){
    if(this.currentStack === this.stackMin){
        return true;
}
return false;
}

StackDataStructure.prototype.canPush = function(){
    if(this.currentStack === this.MAX_SIZE){
    return false;
}
return true;
}

export default StackDataStructure;

