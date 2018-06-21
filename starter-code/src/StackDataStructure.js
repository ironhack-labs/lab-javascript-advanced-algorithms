
 


function StackDataStructure () {  
  this.count = 0;
  this.stackStorage = [];


this.push = function(value){
  this.stackStorage[this.maxSize] = value;
  this.count++;
};

this.pop = function(){
  if(this.count === 0){
    return undefined;
  }
  this.count--;
  var result = this.stackStorage[this.count];
  delete this.stackStorage[this.count];
  return result;
}
this.maxSize= function() {
  if (this.count === 0) {
    return undefined;
  }

  this.count--;
  var result = this.stackStorage[this.count];
  delete this.stackStorage[this.count];
        return result;
        
}
this.size = function() {
  return this.count;
}

// Returns the value at the end of the stack
this.peek = function() {
  return this.stackStorage[this.count-1];
}

}

var myStack = new StackDataStructure ();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
// myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());








// if (stack.length > 10 ){
    
// };
// $("#add-task").click(function(){
//   var nuevaTarea = $('#tarea').val()
//   $('#tarea').val('');
//   var li = '<li><span>' + nuevaTarea + '</span><i class="fa fa-trash-o" aria-hidden="true"><li>';
   
  
//   $("#task-list").append(li);
//    setListener();
  
//  })
 
//  $('span').click(function(){
//    $(this).toggleClass("tachado");
//  })
 
//  function setListener(){
//    $('i').click(function(){
//    if(confirm("Seguro quieres borrar?")){
//      $(this).parent().fadeOut(2000, function(){
//        alert("ganó tanos")
//      });
//    }
//  })
 
//  }
//  setListener();