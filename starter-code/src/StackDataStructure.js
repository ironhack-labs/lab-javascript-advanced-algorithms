function StackDataStructure () {
   this.stackControl = [];
   this.MAX_SIZE = 0;
   this.isEmpty = function (){
    
    if (this.stackControl.length === 0){
        return true; 
    }
       return false;
   };
   
   this.canPush = function (){

        if (this.MAX_SIZE > this.stackControl.length) {
            return false;
        }
        return true;
   };

   this.push = function (num){

    if (this.MAX_SIZE > this.stackControl.length){
        return 'Stack Overflow';
        }

    this.stackControl.push(num)
    return this.stackControl;

   }
   this.pop = function () {

    if (this.stackControl.length === 0){
        return 'Stack Underflow';
    }
       return this.stackControl.pop()
    
   }



}

