function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 5;
};

StackDataStructure.prototype.isEmpty = function(){
    if (this.stackControl.length>0) {
        return false;
    } else {
        return true;
    }
}
StackDataStructure.prototype.canPush = function(){
    if (this.MAX_SIZE === this.stackControl.length) {
        return false;
    } else {
        return true;
    }
}

StackDataStructure.prototype.push = function(value){
    if(StackDataStructure.prototype.canPush===true){
        StackDataStructure.push(value);
        return;
    }else{
        return;
    }

}

StackDataStructure.prototype.pop = function(){
    if(StackDataStructure.prototype.isEmpty===false){
         var length=(StackDataStructure.length-1);
         StackDataStructure.pop();

    }
}