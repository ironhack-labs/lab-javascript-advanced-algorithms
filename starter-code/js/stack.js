// import is an extra
import { StackDataStructure } from "./../src/StackDataStructure.js";
console.log(StackDataStructure);

//create instance
let stack = new StackDataStructure();

// define html elements that you need
let stack_div = document.getElementById("stack-display");
let stack_input = document.getElementById("stack-input");
let add_button = document.getElementById("stack-add");
let take_button = document.getElementById("stack-take");

// variables to check if we can add or remove
let adding_allowed = true;
let removing_allowed = true;

// function to create single stack place

function createStackPlace() {
  let stackPLace = document.createElement("div");
  stackPLace.classList.add("stack-place");
  stack_div.appendChild(stackPLace);
}

// create amount of places equal to ones defined in max-size

for (var i = 0; i < stack.MAX_SIZE; i++) {
  createStackPlace();
}

// listen if add button gets clicked

add_button.onclick = e => {
  let value_to_add_to_array = stack_input.value;
  // if there is an underflow message it can be removed when an element is added
  if (document.getElementsByClassName("stack_underflow").length > 0) {
    document.getElementsByClassName("stack_underflow")[0].remove();
  }
  // check if or stack isn't full
  if (adding_allowed) {
    if (stack.canPush()) {
      stack.push(value_to_add_to_array);
      removing_allowed = true;
      updateDisplay();
    } else {
      stackOverflow();
      // code to execute if we reached max size
      // show the queue overflow message
      // to much so adding can't be done
      adding_allowed = false;
    }
  }
};

// - functionality to change the divs based on the values in the queue

function updateDisplay() {
  let stack_places = stack_div.querySelectorAll(".stack-place");
  for (let i = 0; i < stack.stackControl.length; i++) {
    stack_places[i].innerHTML = `<p class='stack_value'>${
      stack.stackControl[i]
    }</p>`;
  }
}

// ---------------- functionality show the stack overflow

function stackOverflow() {
  let error_msg = document.createElement("div");
  error_msg.innerHTML = `<p class='error_content'>Stack Oveflow</p>`;
  error_msg.classList.add("error_msg", "stack_overflow");
  stack_div.insertBefore(error_msg, stack_div.lastChild.nextSibling);
}

// ------------------ functionality to take elements from the queue
// !!!!!!!!!!! here you have to take first instead of last one
take_button.onclick = () => {
  console.log(stack.stackControl.length);
  if (document.getElementsByClassName("stack_overflow").length > 0) {
    document.getElementsByClassName("stack_overflow")[0].remove();
  }
  if (stack.stackControl.length > 0) {
    stack.pop();
    deleteLastPlace();
    adding_allowed = true;
  } else {
    if (removing_allowed) {
      stackUnderflow();
    }
    removing_allowed = false;
  }
};

// ------------- function to delete the last one

function deleteLastPlace() {
  let stack_places = document.querySelectorAll(".stack_value");
  let last_full_place = stack_places[stack_places.length - 1];
  last_full_place.parentElement.innerHTML = "";
}

// -------------- function to add stack underflow

function stackUnderflow() {
  let error_msg = document.createElement("div");
  error_msg.innerHTML = `<p class='error_content'>Stack Underflow</p>`;
  error_msg.classList.add("error_msg", "stack_underflow");
  stack_div.insertBefore(error_msg, stack_div.firstChild);
}
