class List {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 9;
  }
  isfull() {
    return !this.stackControl.length < 9;
  }

  isempty() {
    return !this.stackControl.length > 0;
  }
}

class Stack extends List {
  constructor() {
    super();
  }

  add(elemento) {
    if (this.isfull()) return false;
    this.stackControl.push(elemento);
    return true;
  }

  remove() {
    if (this.isempty()) return false;
    this.stackControl.pop();
  }
}

class Queue extends List {
  constructor() {
    super();
  }

  add(elemento) {
    if (this.isfull()) return false;
    this.stackControl.push(elemento);
    return true;
  }

  remove() {
    if (this.isempty()) return false;
    this.stackControl.shift();
    return true;
  }
}
var elementos = $(".elemento");

/*
var add = (a,b)=>a+b
var sub = (a,b)=>a-b
var mul = (a,b)=>a*b 
var div = (a,b)=>a/b 
var mod = (a,b)=>a%b
  
*/
