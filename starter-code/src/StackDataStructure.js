
function StackDataStructure () {
  this.MAX_SIZE = 10;
  this.stackControl = [];
};

 StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length > 0) {
  return false }
    else {return true}
};

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE ) {
  return true }
    else {return false}
};

StackDataStructure.prototype.push = function(num) {
  if (this.stackControl.length < this.MAX_SIZE) {
    this.stackControl.push(num);
    return this.stackControl }
    else {return "Stack Overflow"}
  }; 

  StackDataStructure.prototype.pop = function() { 
  if (this.stackControl.length > 0) {
    return this.stackControl.pop() }
    else { return "Stack Underflow"}
  }; 

/*   let stack = new StackDataStructure() 
    this.stackControl.push(19);
    this.stackControl.push(88);
    this.stackControl.pop();
   */

  


  
  /* 
  if (this.stackControl.length > 0 ) 
    return false
  }
  else {return true}
}; */


//for (i = 0; i < cars.length; i++) {

//expect(stack).toBeDefined();


/* 
expect(x).toEqual(y);	Compares objects or primitives x and y and passes if they are equivalent
expect(x).toBe(y);	Compares objects or primitives x and y and passes if they are the same object
expect(x).toMatch(pattern);	Compares x to string or regular expression pattern and passes if they match
expect(x).toBeDefined();	Passes if x is not undefined
expect(x).toBeUndefined();	Passes if x is undefined
expect(x).toBeNull();	Passes if x is null
expect(x).toBeTruthy();	Passes if x evaluates to true
expect(x).toBeFalsy();	Passes if x evaluates to false
expect(x).toContain(y);	Passes if array or string x contains y
expect(x).toBeLessThan(y);	Passes if x is less than y
expect(x).toBeGreaterThan(y);	Passes if x is greater than y
expect(function(){fn(); }).toThrow(e);	Passes if function fn throws exception e when executed 
*/