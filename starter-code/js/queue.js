// is not necessary to import because already globaly availble i couldnt access because i did not
// make an instance
import { QueueDataStructure } from "./../src/QueueDataStructure.js";

//create instance
let queue = new QueueDataStructure();

// define html elements that you need
let queue_div = document.getElementById("queue-display");
let queue_input = document.getElementById("queue-input");
let add_button = document.getElementById("queue-add");
let take_button = document.getElementById("queue-take");

// variables to check if we can add or remove
let adding_allowed = true;
let removing_allowed = true;

//------- functionality to create or initial queue -------------------

// create one place in the queue
function createQueuePlace() {
  let queuePLace = document.createElement("div");
  queuePLace.classList.add("queue-place");
  queue_div.appendChild(queuePLace);
}

// create as many places as max size defined
for (var i = 0; i < queue.MAX_SIZE; i++) {
  createQueuePlace();
}

//---------- functionality to add something to or queue -------------------

// listen if add button gets clicked

add_button.onclick = e => {
  let value_to_add = queue_input.value;
  if (document.getElementsByClassName("query_underflow").length > 0) {
    document.getElementsByClassName("query_underflow")[0].remove();
  }
  if (adding_allowed) {
    if (queue.canEnqueue()) {
      queue.enqueue(value_to_add);
      removing_allowed = true;
      updateDisplay();
    } else {
      queueOverflow();
      // code to execute if we reached max size
      // show the queue overflow message
      adding_allowed = false;
    }
  }
};

// --------------- functionality to change the divs based on the values in the queue

function updateDisplay() {
  let queue_places = queue_div.querySelectorAll(".queue-place");
  for (let i = 0; i < queue.queueControl.length; i++) {
    queue_places[i].innerHTML = `<p class='queue_value'>${
      queue.queueControl[i]
    }</p>`;
  }
}

// ---------------- functionality show the queue overflow

function queueOverflow() {
  let error_msg = document.createElement("div");
  error_msg.innerHTML = `<p class='error_content'>Queue Oveflow</p>`;
  error_msg.classList.add("error_msg", "query_overflow");
  queue_div.insertBefore(error_msg, queue_div.lastChild.nextSibling);
}

// ------------------ functionality to take elements from the queue

take_button.onclick = () => {
  console.log(queue.queueControl.length);
  if (document.getElementsByClassName("query_overflow").length > 0) {
    document.getElementsByClassName("query_overflow")[0].remove();
  }
  if (queue.queueControl.length > 0) {
    queue.dequeue();
    deleteLastPlace();
    adding_allowed = true;
  } else {
    if (removing_allowed) {
      queueUnderflow();
    }
    removing_allowed = false;
  }
};

// ------------- function to delete the last one

function deleteLastPlace() {
  let queue_places = document.querySelectorAll(".queue_value");
  let last_full_place = queue_places[queue_places.length - 1];
  last_full_place.parentElement.innerHTML = "";
}

// -------------- function to add stack underflow

function queueUnderflow() {
  let error_msg = document.createElement("div");
  error_msg.innerHTML = `<p class='error_content'>Queue Underflow</p>`;
  error_msg.classList.add("error_msg", "query_underflow");
  queue_div.insertBefore(error_msg, queue_div.firstChild);
}
