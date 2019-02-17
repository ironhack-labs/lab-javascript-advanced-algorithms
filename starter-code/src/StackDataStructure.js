function StackDataStructure () {

    this.stackControl=[];
    this.MAX_SIZE=4;
    this.isEmpty=function(){
      if(this.stackControl.length!=0){
          return  false;}else{return true; }
    };
    this.canPush=function(){

       if(this.stackControl.length == this.MAX_SIZE){

       return false;
       }else{return true;}

    };
    this.push=function(valor){
   if(this.canPush()){
        this.stackControl.push(valor);
        return this.stackControl;
    }else{

     return "Stack Overflow";

    }
    };
    this.pop=function(){

        if(!this.isEmpty()){

            return  this.stackControl.pop();

        }else{
    
         return "Stack Underflow";
    
        }


    };
}
