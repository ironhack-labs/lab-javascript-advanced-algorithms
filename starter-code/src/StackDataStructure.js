function StackDataStructure() {
    //LIFO 
    //METODO PARA INSERTAR Y ELIMINAR ELEMENTOS DE LA PILA
    //METODO PARA COMPROBAR SI PUEDO AÑADIR Y BORRAR ELEMENTOS
    // CUIDADO CON AÑADIR ELEMENTOS A LA PILLA LLENA Y AL SACAR ELEMENTOS DE UNA PILA VACIA
    this.stackControl = [],
        this.MAX_SIZE = 9;
};

StackDataStructure.prototype.isEmpty = function () {

    if (this.stackControl.length == 0) return true;
    return false;

};

StackDataStructure.prototype.canPush = function () {

    if ((this.stackControl.length < this.MAX_SIZE)) return true;

    return false;


};

StackDataStructure.prototype.push = function (newElement) {
    if (this.canPush()) {
        this.stackControl.push(newElement);
        return this.stackControl;
    } else {
        return 'Stack Overflow';
    }

};

StackDataStructure.prototype.pop = function (newElement) {
    if (!this.isEmpty()) {
        this.stackControl.shift(newElement);
        return this.stackControl.slice(-1)[0] 
    } else {
        return 'Stack Underflow';
    }
};
