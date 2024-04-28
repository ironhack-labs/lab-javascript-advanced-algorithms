class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE;
    // ... your code goes here
  }

  isEmpty() {
    return this.stackControl.length === 0;
    // ... your code goes here
  }

  push(item) {

    try {
      if(this.canPush())
    {this.stackControl.push(item)}
    else
    {throw new Error("STACK_OVERFLOW")}
    } catch (error) {
      console.log(error);
    }
    
     
  }

  pop() {
    try{
      if(!this.isEmpty())
    {this.stackControl.pop();}
    else
    {throw new Error("STACK_UNDERRFLOW")}
    }
    catch(error){
      console.log(error);
    }
    
  }

  display() {
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;

/*
const StackA = new Stack();

for(let i=StackA.display().length;i<StackA.MAX_SIZE;i++){
  StackA.push("Test");
}
console.log(StackA.display());
console.log(StackA.display().length);

StackA.pop();
console.log(StackA.display());
console.log(StackA.display().length);

for(let i=StackA.display().length;i<StackA.MAX_SIZE;i++){
  StackA.push("Test");
}
StackA.push("Test");
console.log(StackA.display());

for(let i=StackA.display().length;i>0;i--){
  StackA.pop();
}
StackA.pop();
console.log(StackA.display());
*/