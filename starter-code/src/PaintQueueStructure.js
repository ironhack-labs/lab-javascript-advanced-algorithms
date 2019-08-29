class PaintQueueStructure extends PaintStackStructure {
  constructor(queueDOMEl) {
    super(queueDOMEl);
  }

  deleteElement(queueDOMEl) {
    const rowToRemove = queueDOMEl.querySelector(
      ".structure-row-filled:last-child"
    );

    const rowToRemoveText = rowToRemove.textContent;
    const newFirstRow = rowToRemove.cloneNode(false);
    queueDOMEl.firstElementChild.after(newFirstRow);
    // rowToRemove.textContent = "";
    // rowToRemove.classList.remove("structure-row-filled");
    newFirstRow.classList.remove('structure-row-filled')
    rowToRemove.remove();

    this.message(
      queueDOMEl.querySelector(".structure-row"),
      `${rowToRemoveText} deleted!`
    );
  }

  message(messageDOMEl, message) {
    messageDOMEl.textContent = message;
  }
}
