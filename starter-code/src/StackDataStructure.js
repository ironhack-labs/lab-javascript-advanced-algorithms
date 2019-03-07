function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 8;
    this.isEmpty = function(){
        if (this.stackControl.length==0){
            return true;
        }
        if (this.stackControl.length>0){
            return false;
        }
    }
    this.canPush = function(){
        if (this.stackControl.length<this.MAX_SIZE){
            return true;
            }
        else {
            return false
            }
        }
    this.push = function(arg){
        if (this.stackControl.length >= this.MAX_SIZE){
            return  'Stack Overflow';
             }
            else {
            this.stackControl.push(arg);
            return this.stackControl;
             }
    }
    this.pop = function(){
        if (this.stackControl.length <=0 ){
            return  'Stack Underflow';
            }
            else {
            return this.stackControl.pop();
            }
    }
}
