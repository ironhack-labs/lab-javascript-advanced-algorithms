

function StackDataStructure () {
    this.stackEmpty = []; //Creo Array vacio. MI STACK
    this.stackEmpty.lenght= 10; //Defino una capacidad para Stack.10 Elementos
    this.addElements = function(element){
        
        if (this.stackEmpty[0] == undefined) { //Compruebo que al menos haya una posicion libre. Si hay posicion libre la posicion 0 == undefined
            this.stackEmpty.unshift(element); //Le añado elemento, en primera posición.
            
            console.log("That stack is not empty");
            console.log("The element " + element + " has been inserted");
            return this.stackEmpty;
          

        } else { //Aquí llegaremos si el Stack está lleno,
            console.log("Stack OverFlow")
        }
        console.log(this.stackEmpty); //comprobacion para
    },

    this.removeElements=function(element){
        if()

    },


  




    //while (!stackEmpty.length == 0)


};
