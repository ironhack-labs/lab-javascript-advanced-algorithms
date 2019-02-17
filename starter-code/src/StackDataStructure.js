
// function StackDataStructure (){
// }

// function StackDataStructure () {
//     this.stackEmpty = []; //Creo Array vacio. MI STACK
//     this.stackEmpty.lenght= 10; //Defino una capacidad para Stack.10 Elementos
//     this.addElements = function(element){
        
//         if (this.stackEmpty[0] == undefined) { //Compruebo que al menos haya una posicion libre. Si hay posicion libre la posicion 0 == undefined
//             this.stackEmpty.unshift(element); //Le añado elemento, en primera posición.
            
//             console.log("That stack is not empty");
//             console.log("The element " + element + " has been inserted");
//             return this.stackEmpty;
//         } else { //Aquí llegaremos si el Stack está lleno,
//             console.log("Stack OverFlow") //Si el Stack está lleno
//             return false;
//         }
//     },

//     this.removeElements=function(element){
//         if (!this.stackEmpty[0] == undefined){//Compruebo que haya un elemento en primera posicion
//             this.stackEmpty.shift(element); //Elimino el elemento que esté en la primera posicion
//             console.log("That stack is not empty");
//             console.log("The last element inserted in the stack is " + element);
//             return this.stackEmpty;
//         }else{
//             console.log("Stack UnderFlow") //Si no hay elementos en el Stack
//         }

//     }


// };

function StackDataStructure() {
}

function StackDataStructure() {
    this.stack = []; //Creo Array vacio. MI STACK
    this.StackCapacity = 10; //Defino una capacidad para Stack.10 Elementos
    this.isEmpty = function(){
        if (this.stack.length === 0) {//Compruebo que el array esté vacio
            return true;
        }else{
            return false;
        }
    };


    this.canPush = function(){ //Puede mandar elementos al array
        if(this.stack.length< this.StackCapacity){
            return true;
        }else{
            return false;
        }
    };

    this.push = function(element){
        if(this.canPush() === true){
            this.stack.push(element); //Le añado elemento, en primera posición.
            return this.stack;
        }else{
            return "Stack OverFlow" //Si el Stack está lleno
        }
    };

    this.pop = function(){
        if(this.isEmpty() === true){
            return "Stack UnderFlow"  //Si no hay elementos en el Stack
        }else{
            this.stack.pop(); //Elimino el elemento que esté en la primera posicion
            return this.stack;
        }
    };

}

