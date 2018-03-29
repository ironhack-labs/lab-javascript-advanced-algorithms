    function StackDataStructure () {
        this.stackControl = [];
        this.MAX_SIZE = 10;
}

    StackDataStructure.prototype.isEmpty = function(){
        
        if (this.stackControl.length==0){ // añadir los falsos 
            return true;
        }else{
            return false;
        }
    }
    StackDataStructure.prototype.canPush = function(){
        
        if (this.stackControl.length< this.MAX_SIZE){ // comprobar la longitud del array con el MAXSize
            return true;
        }else{
            return false;
        }
    } 
    StackDataStructure.prototype.push = function(item){ // la funcion tiene que añadir un valor 
        if(this.canPush()){
            
         this.stackControl.push(item);
        
            return this.stackControl;    // tiene que devolver el valor .
        }else{

            return "Stack Overflow" // tienes que anadir esta frase cuando esta completo 
        }
        
    } 
    StackDataStructure.prototype.pop = function(){
        if (this.isEmpty()){
            return 'Stack Underflow';
        }else{
       var a =  this.stackControl.pop();

        return a;
        }
    }
