
class StackDataStructure {

    constructor(){

        this.stackControl = [];
        this.MAX_SIZE = 9;
        

        
    }

        isEmpty(){

        

        if(this.stackControl.length === 0){

            return true;

        }else{
            return false;
        }
        

       
    }

       canPush(){


        if(this.stackControl.length === this.MAX_SIZE){
            return false
            
        }else{
            return true;
        }

        

            
    }


    push(item){

        if(this.canPush()){
            this.stackControl.push(item);
            return this.stackControl;
        }
        return 'Stack Overflow';
        
   
    }



    pop(item){

        if(this.isEmpty()){
            return 'Stack Underflow';
        }else{
            return this.stackControl.pop(item);
        }

    }


   
}
