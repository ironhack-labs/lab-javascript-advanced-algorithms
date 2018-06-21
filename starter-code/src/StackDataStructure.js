function StackDataStructure () {

    this.stackControl=[];
    this.MAX_SIZE=8;
    
    
};

StackDataStructure.prototype.canPush=function(){

    return (this.stackControl.length<this.MAX_SIZE)


};


StackDataStructure.prototype.isEmpty=function(){

    return (this.stackControl.length==0)
 
 };

StackDataStructure.prototype.push=function(element){

    if (this.canPush()){
        this.stackControl.push(element);
        return this.stackControl;
    }
    else 
        return "Stack Overflow";
};

StackDataStructure.prototype.pop=function(){

    var last=this.stackControl[this.stackControl.length-1]
    if (!this.isEmpty()){
       this.stackControl.pop();
        return last;
    }

    else return "Stack Underflow"

};



