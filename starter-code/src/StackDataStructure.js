function StackDataStructure () {
    this.stackControl = [],
    this.MAX_SIZE = 30
}
StackDataStructure.prototype.isEmpty = function(){
    if (this.stackControl.length === 0){
        return true
    }else{
        return false;
    }
}


StackDataStructure.prototype.canPush = function(stc){
    if (this.stackControl.length < this.MAX_SIZE){
        return true
    } else {
        return false
    }
}
StackDataStructure.prototype.push = function(stc){
    if(this.canPush()){
    this.stackControl.push(stc)
    return this.stackControl
    }
    else if (!this.canPush()){
        return 'Stack Overflow'
    }
   }

StackDataStructure.prototype.pop = function(stc){
    if(this.isEmpty()){
        this.stackControl.shift(stc)
        return this.stackControl   
        }
}