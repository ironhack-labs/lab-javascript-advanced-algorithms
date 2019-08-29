const handleAddStackButtonClick = (
  stack,
  element,
  stackBodyDOMEl,
  stackPainter
) => {
  let itemAdded = addStackElement(stack, element);

  if (itemAdded) {
    stackPainter.addElement(element);
    stackPainter.message(
      stackBodyDOMEl.querySelector(".structure-row"),
      `${element} added!`
    );
  } else {
    stackPainter.message(
      stackBodyDOMEl.querySelector(".structure-row"),
      "Stack Overflowed"
    );
  }
};

const addStackElement = (stack, element) =>
  stack.push(element) !== "Stack Overflow" ? true : false;

const handleTakeStackButtonClick = (stack, stackDOMEl, stackPainter) => {
  if (takeStackElement(stack)) {
    stackPainter.deleteElement(stackDOMEl);
  } else
    stackPainter.message(
      stackDOMEl.querySelector(".structure-row"),
      "Stack Underlow"
    );
};

const takeStackElement = stack =>
  stack.pop() !== "Stack Underflow" ? true : false;

const handleAddQueueButtonClick = (
  queue,
  element,
  queueBodyDOMEl,
  queuePainter
) => {
  let queueItemAdded = addQueueElement(queue, element);

  if (queueItemAdded) {
    queuePainter.addElement(element);
    queuePainter.message(
      queueBodyDOMEl.querySelector(".structure-row"),
      `${element} added!`
    );
  } else {
    queuePainter.message(
      queueBodyDOMEl.querySelector(".structure-row"),
      "Queue Overflowed"
    );
  }
};

const addQueueElement = (queue, element) =>
  queue.enqueue(element) !== "Queue Overflow" ? true : false;

const handleTakeQueueButtonClick = (queue, queueDOMEl, queuePainter) => {
  if (takeQueueElement(queue)) {
    queuePainter.deleteElement(queueDOMEl);
  } else
    queuePainter.message(
      queueDOMEl.querySelector(".structure-row"),
      "Queue Underlow"
    );
};

const takeQueueElement = queue =>
  queue.dequeue() !== "Queue Underflow" ? true : false;

const preventFormsToBeSubmited = forms =>
  [...forms].forEach(form =>
    form.addEventListener("submit", e => e.preventDefault())
  );

// --------------------------------

const init = () => {
  const stackDOMEl = document.querySelector(".structure-body-stack");
  const queueDOMEl = document.querySelector(".structure-body-queue");

  let stack = new StackDataStructure();
  let queue = new QueueDataStructure();
  let stackPainter = new PaintStackStructure(stackDOMEl);
  let queuePainter = new PaintQueueStructure(queueDOMEl);

  const buttons = [...document.querySelectorAll(".button")];

  const addStackElementDOMEl = buttons[0];
  const takeStackElementDOMEl = buttons[1];
  const addQueueElementDOMEl = buttons[2];
  const takeQueueElementDOMEl = buttons[3];

  const addStackElementInputDOMEl = document.getElementById(
    "stack-added-value"
  );
  const addQueueElementInputDOMEl = document.getElementById(
    "queue-added-value"
  );

  preventFormsToBeSubmited(document.forms);

  addStackElementDOMEl.addEventListener("click", e => {
    handleAddStackButtonClick(
      stack,
      addStackElementInputDOMEl.value,
      stackDOMEl,
      stackPainter
    );
    addStackElementInputDOMEl.value = "";
  });

  addQueueElementDOMEl.addEventListener("click", e => {
    handleAddQueueButtonClick(
      queue,
      addQueueElementInputDOMEl.value,
      queueDOMEl,
      queuePainter
    );
    addQueueElementInputDOMEl.value = "";
  });

  takeStackElementDOMEl.addEventListener("click", e => {
    handleTakeStackButtonClick(stack, stackDOMEl, stackPainter);
  });

  takeQueueElementDOMEl.addEventListener("click", e => {
    handleTakeQueueButtonClick(queue, queueDOMEl, queuePainter);
  });
};

init();
