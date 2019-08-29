const handleAddStackButtonClick = (stack, element) => {
  let itemAdded = addStackElement(stack, element);

  if (itemAdded !== "Stack Overflow") {
    const lastItemAdded = document.querySelector(
      ".structure-body-stack .structure-row-filled"
    );

    let newStackElementValue = itemAdded[itemAdded.length - 1];

    if (lastItemAdded) {
      const previousLastStackItemAdded = lastItemAdded.previousElementSibling;
      previousLastStackItemAdded.classList.add("structure-row-filled");
      previousLastStackItemAdded.textContent = newStackElementValue;
    } else {
      const previousLastStackItemAdded = document.querySelector(
        ".structure-body-stack"
      ).lastElementChild;

      previousLastStackItemAdded.classList.add("structure-row-filled");
      previousLastStackItemAdded.textContent = newStackElementValue;
    }
  } else {
    document.querySelector(".structure-row").textContent = itemAdded;
  }

  console.log(itemAdded);
};

const addStackElement = (stack, element) => stack.push(element);

const handleTakeStackButtonClick = (stack, stackDOMEl) => {
  if (takeStackElement(stack)) {
    // stackDOMEl.querySelector(".structure-row-filled").textContent = "";
    // stackDOMEl
    //   .querySelector(".structure-row-filled")
    //   .classList.remove("structure-row-filled");
    stackPainter.deleteElement(stackDOMEl)
  }
};

const takeStackElement = stack =>
  stack.pop() !== "Stack Underflow" ? true : false;

const handleAddQueueButtonClick = (queue, element) => {
  let queueItemAdded = addQueueElement(queue, element);

  if (queueItemAdded) {
    console.log("Añadido")
  } else {
    console.log("Algo fue mal")
  }
};

const addQueueElement = (queue, element) =>
  queue.queue(element) !== "Queue Overflow" ? true : false;

const handleTakeQueueButtonClick = queue => {
  console.log("Take queue item");
};

const preventFormsToBeSubmited = forms =>
  [...forms].forEach(form =>
    form.addEventListener("submit", e => e.preventDefault())
  );

// --------------------------------

let stack = new StackDataStructure();

const buttons = [...document.querySelectorAll(".button")];

const addStackElementDOMEl = buttons[0];
const takeStackElementDOMEl = buttons[1];
const addQueueElementDOMEl = buttons[2];
const takeQueueElementDOMEl = buttons[3];

const stackDOMEl = document.querySelector(".structure-body-stack");

const addStackElementInputDOMEl = document.getElementById("stack-added-value");
const addQueueElementInputDOMEl = document.getElementById("queue-added-value");

preventFormsToBeSubmited(document.forms);

addStackElementDOMEl.addEventListener("click", e => {
  handleAddStackButtonClick(stack, addStackElementInputDOMEl.value);
});

addQueueElementDOMEl.addEventListener("click", e => {
  handleAddQueueButtonClick(queue, addQueueElementInputDOMEl.value)
});

takeStackElementDOMEl.addEventListener("click", e => {
  handleTakeStackButtonClick(stack, stackDOMEl);
});

takeQueueElementDOMEl.addEventListener("click", handleTakeQueueButtonClick);
