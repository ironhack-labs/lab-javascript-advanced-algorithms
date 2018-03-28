    function StackDataStructure () {
        this.stackControl = [];
        this.MAX_SIZE = 1;
}

    StackDataStructure.prototype.isEmpty = function(){
        
        if (this.stackControl=[]){
            return true;
        }
    }
    StackDataStructure.prototype.canPush = function(){
        
        if (this.stackControl< this.MAX_SIZE){
            return true;
        }
    } 
    StackDataStructure.prototype.push = function(){
        if(this.canPush=true){
            return this.stackControl.length
        }else{
            return "Stack Overflow"
        }
        
    } 
    StackDataStructure.prototype.pop = function(){
        return stackControl = [];
    } 
