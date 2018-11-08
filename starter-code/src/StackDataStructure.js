function StackDataStructure() { //this function will be called everytime there's a click on the add buttton receiving an input box, in this, case, i'll make a fixed data for the matter
    this.stackDataArr = []
    this.limitOverflow = 9
    this.limitUnderflow = 0
    this.removed = []

    this.stackOverflow = function () {
            alert("Stack overflow, can't take any more");
        },

        this.stackUnderflow = function () {
            alert("Stack is already empty!!!, geezz....")
        }


    this.stackRemove = function () {
        this.removed.push(stackDataArr.pop())
    }
}


/*//This will be called on the listener for add{
if (this.stackDataArr.length >= this.limitOverflow){ 
this.stackPush()
}else{
this.stackOverflow()
}
//here ends the add button listener }

//This will be called on the listener for remove{
if (this.stackDataArr.length <= this.limitUnderflow){ 
  this.stackRemove()
}else{
  this.stackUnderflow()
*/

//here ends the remove button listener }

var stackData = new StackDataStructure()
var inputStack = $("#inputStack")
var removed = []
var clearInputStack = document.getElementById('inputStack')
stackData.stackDataArr = []
$("#addStack").click(function () {
    console.log(stackData.limitOverflow, stackData.stackDataArr.length)
    if (stackData.stackDataArr.length <= stackData.limitOverflow) {
        if(inputStack.val()===''){
            alert("you cant put me empty elements");
        }else{
        stackData.stackDataArr.push(inputStack.val())
        stackPrinter()
        console.log(stackData.stackDataArr, stack1.val())
        clearInputStack.value = ''
    }
        if (stackData.stackDataArr.length > stackData.limitOverflow)
            stackData.stackOverflow()
    }
});

var i=0;
var removedArray = $("#removedArray")

$("#removeStack").click(function () {
    if (stackData.stackDataArr === 0 || stackData.stackDataArr.length === stackData.limitUnderflow) {
        stackData.stackUnderflow();
    } else {
        removed[i] = stackData.stackDataArr.pop();
        console.log(removed)
        removedArray.text(removed)
        stackClear();
        i++
        console.log(stackData.limitUnderflow, stackData.stackDataArr.length)
    }
});

//Stack Printer and clear-------------------------------------------------Stack Printer and clear
var stack1=$("#stackIndicator1")
var stack2=$("#stackIndicator2")
var stack3=$("#stackIndicator3")
var stack4=$("#stackIndicator4")
var stack5=$("#stackIndicator5")
var stack6=$("#stackIndicator6")
var stack7=$("#stackIndicator7")
var stack8=$("#stackIndicator8")
var stack9=$("#stackIndicator9")



function stackPrinter (){
   if(stack1.text()===""){
        stack1.text(inputStack.val())
    }else if(stack2.text()===""){
        stack2.text(inputStack.val())
    }else if(stack3.text()===""){
        stack3.text(inputStack.val())
    }else if(stack4.text()===""){
        stack4.text(inputStack.val())
    }else if(stack5.text()===""){
        stack5.text(inputStack.val())
    }else if(stack6.text()===""){
        stack6.text(inputStack.val())
    }else if(stack7.text()===""){
        stack7.text(inputStack.val())
    }else if(stack8.text()===""){
        stack8.text(inputStack.val())
    }else if(stack9.text()===""){
        stack9.text(inputStack.val())
    }
    }

function stackClear(){
    if(stack9.text()!==''){
        stack9.text('')
    }else if(stack8.text()!==''){
        stack8.text('')
    }else if(stack7.text()!==''){
        stack7.text('')
    }else if(stack6.text()!==''){
        stack6.text('')
    }else if(stack5.text()!==''){
        stack5.text(inputStack.val())
    }else if(stack4.text()!==''){
        stack4.text('')
    }else if(stack3.text()!==''){
        stack3.text('')
    }else if(stack2.text()!==''){
        stack2.text('')
    }else if(stack1.text()!==''){
        stack1.text('')
    }
}
