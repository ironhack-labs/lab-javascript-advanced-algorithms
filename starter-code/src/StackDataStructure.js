function StackDataStructure () {
this.stackControl = [];
this.MAX_SIZE = 3;
}
StackDataStructure.prototype.isEmpty = function(){
    if(this.stackControl == 0){
        return true;
    }else {
        return false;
    }
};

StackDataStructure.prototype.canPush = function(){
    if(this.stackControl.length < this.MAX_SIZE){
        return true;
    }else {
        return false;
    }
};
StackDataStructure.prototype.push = function(){
    if(this.stackControl.length< this.MAX_SIZE){
        return this.stackControl.push(19);
    }else {
        return false;
    }
};
StackDataStructure.prototype.pop = function(){

};