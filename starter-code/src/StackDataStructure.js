//function StackDataStructure () {
//}//

function StackDataStructure (){
    this.stack = []; //creo un array vacio
    this.stackCapacity = 10;//definimos la capacidad del stack 10 elementos
    this.isEmpty = function() {
        if (this.stack.length === 0){//compromabos que esta vario el array
         return true;
        } else {
            return false;
        }
    };

    this.canPush = function() {//para mandar elementos al arrray
        if (this.stack.length < this.stackCapacity){
          return true;
        } else {
            return false;
        }
      };

    this.push = function(element) {
        if(this.canPush()=== true){
          this.stack.push(element);//le añade elemento a la fila 1
          return this.stackControl;
        } else {
            return 'Stack Overflow';//si el stack esta lleno
        }
    };
    
    this.pop = function() {
        if(this.isEmpty()=== true){
          return 'Stack Underflow'//si no existen elementos en el stack
        } else {
            this.stack.pop();//elimino el elemento de la fila 1
            return this.stack;
        }
    };
}
