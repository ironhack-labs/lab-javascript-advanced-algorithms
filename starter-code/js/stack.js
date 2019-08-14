import {QueueDataStructure} from "../src/QueueDataStructure.js"
import {StackDataStructure} from "../src/StackDataStructure.js"

// global variables 

const removedElement = document.getElementById("taken-element");
const removeBtn = document.querySelector(".take-btn");
const addBtn = document.querySelector(".add-btn");
var stack = new StackDataStructure();

function start(){
  createlist(stack.MAX_SIZE);
  removeClicEvent();
  addClickEvent();
}
window.addEventListener("DOMContentLoaded", start);

function removeClicEvent(){
    removeBtn.onclick = removeStack;
}

function addClickEvent(){
  addBtn.onclick =addStack;
}

function createlist(nbelements){
  const myUl = document.getElementById("list-of-elements");
  for (let i=0; i<nbelements;i++){
    myUl.innerHTML += "<div class=\"list empty-element\"></div>";
  }
}

function createFlowedCell(flowType){
  const myUl = document.getElementById("list-of-elements");
  if (flowType=="Stack Underflow"){
    myUl.innerHTML += `<div class=\"list flowed\">${flowType}</div>`;
  }else if (flowType=="Stack OverFlow"){
    myUl.innerHTML = `<div class=\"list flowed\">${flowType}</div>` +  myUl.innerHTML;
  }
}

function checkFlowedCell(){
  const myUl = document.getElementsByClassName("flowed");
  if (myUl.length==0){
    return false;
  } return true; 
}

function removeFlowedCell(flowType){
  const myUl = document.querySelector(".flowed");
  if (myUl) myUl.remove();
}

function addStack(){
  const userInput= document.getElementById("stack-input");
  // const elementsList = document.querySelectorAll(".list");
  if (stack.canPush()==false){
    removeFlowedCell();
    createFlowedCell("Stack OverFlow");
  } else {
    stack.push(userInput.value);
    removeFlowedCell();
    const lastElement = document.querySelector(`#list-of-elements .empty-element:nth-last-child(${stack.stackControl.length})`)
    lastElement.classList.remove("empty-element");
    lastElement.classList.add("filled-element");
    lastElement.innerHTML=userInput.value;
  }
}

function removeStack(){
  if (checkFlowedCell()==true){
    if(stack.stackControl.length>0){
      removeFlowedCell();
    }
   
  } else{
    let popedElement =stack.pop();
    if (popedElement=="Stack Underflow"){
      removeFlowedCell();
      createFlowedCell("Stack Underflow");
      removedElement.innerHTML ="";
    } else {
      const firstElement = document.querySelector(`#list-of-elements .filled-element`);
      removedElement.innerHTML = firstElement.innerText;
      firstElement.classList.remove("filled-element");
      firstElement.classList.add("empty-element");
      firstElement.innerHTML="";
    }
  }
}

