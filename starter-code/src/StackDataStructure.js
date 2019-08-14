function StackDataStructure (info) {
  this.stackControl = [];
  this.MAX_SIZE = 6;
}

StackDataStructure.prototype.isEmpty = function(){
  if(this.stackControl.length === 0) return true;
  else {
    return false }
}

StackDataStructure.prototype.canPush = function(){
  if(this.stackControl.length <this.MAX_SIZE){
    return true;
  }
  else {
    return false}
}

StackDataStructure.prototype.push = function(element){
  if(this.canPush()){
    this.stackControl.push(element)
    return this.stackControl;
  }
  else {
    return "Stack Overflow"
  }
}

StackDataStructure.prototype.pop = function(){
  if(this.stackControl.length > 0){
    return this.stackControl.pop()
  }
  else {
     return "Stack Underflow"}
}


const stack = new StackDataStructure({
  stackControl: [],
  MAX_SIZE: 6,
});

const input = document.getElementById("input-stack");
const btnAddStack = document.querySelector(".addStack");
const btnRemoveStack = document.querySelector(".removeStack");

btnAddStack.onclick = function (){
  if(stack.stackControl.length === 0){
  document.querySelector(".container>.stack").classList.add("is-active");
  document.querySelector(".container>.is-active").innerHTML = input.value;}
  else if (stack.canPush()){
    document.querySelector(".stack:not(.is-active)").classList.add("is-active");
    const active = document.querySelectorAll(".stack.is-active");
    active[active.length-1].innerHTML = input.value;}
  else {window.alert("Stack Overflow")};
  stack.push(input.value);
  console.log(stack.stackControl)
}

btnRemoveStack.onclick = function (){
  if(!stack.canPush()){
  document.querySelector(".container :last-child").classList.remove("is-active");
  document.querySelector(".container :last-child").innerHTML=""}
  else  if(stack.stackControl.length > 0){
    const active = document.querySelectorAll(".is-active");
    active[active.length-1].classList.remove("is-active");
    active[active.length-1].innerHTML=""}
  else {window.alert("Stack Underflow")};
  stack.pop()
  console.log(stack.stackControl)
}
