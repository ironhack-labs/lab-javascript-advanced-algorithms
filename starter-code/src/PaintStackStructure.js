class PaintStackStructure {
  constructor(stackDOMEl) {
    this.stackDOMEl = stackDOMEl;
  }

  addElement(stackElementValue) {
    const lastItemAdded = document.querySelector(
      `.${this.stackDOMEl.classList[1]} .structure-row-filled`
    );

    if (lastItemAdded) {
      const previousLastStackItemAdded = lastItemAdded.previousElementSibling;
      previousLastStackItemAdded.classList.add("structure-row-filled");
      previousLastStackItemAdded.textContent = stackElementValue;
    } else {
      const previousLastStackItemAdded = document.querySelector(
        `.${this.stackDOMEl.classList[1]}`
      ).lastElementChild;

      previousLastStackItemAdded.classList.add("structure-row-filled");
      previousLastStackItemAdded.textContent = stackElementValue;
    }
  }

  deleteElement(stackDOMEl) {
    const rowToRemove = stackDOMEl.querySelector(".structure-row-filled");
    const rowToRemoveText = rowToRemove.textContent
    rowToRemove.textContent = "";
    rowToRemove.classList.remove("structure-row-filled");

    this.message(
      stackDOMEl.querySelector(".structure-row"),
      `${rowToRemoveText} deleted!`
    );
  }

  message(messageDOMEl, message) {
    messageDOMEl.textContent = message;
  }
}
