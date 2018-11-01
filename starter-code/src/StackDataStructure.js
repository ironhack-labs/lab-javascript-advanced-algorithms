
function StackDataStructure () {
    
   this.stackControl= [];
    this.MAX_SIZE= 5;
    this.isEmpty= function (){
       if( this.stackControl.length===0){
        return true
       } else {
           return false
       }

    };
    this.canPush =function(){
        return this.stackControl.length!==this.MAX_SIZE
    };
    this.push=function(valor){
        if (this.canPush()){
        this.stackControl.push(valor);
        return this.stackControl }
        else {
            return    'Stack Overflow'
        }
        
      
        
    };
    this.pop=function(){
        if(this.isEmpty()===true){
           
            return 'Stack Underflow' 

        } else {
            return this.stackControl.pop();
        }

    }
   
}

