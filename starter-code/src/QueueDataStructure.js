class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  isEmpty() {
    return this.queueControl.length ? false : true;
  }

  canEnqueue() {
    return this.queueControl.length >= this.MAX_SIZE ? false : true;
  }

  enqueue(el) {
    if (this.canEnqueue()) this.queueControl.unshift(el);
    else return "Queue Overflow";
    return this.queueControl;
  }

  dequeue() {
    return !this.isEmpty() ? this.queueControl.pop() : "Queue Underflow";
  }

  render() {
    const queueList = document.querySelector("#queue .list");
    queueList.innerHTML = "";
    if (this.isEmpty()) {
    }

    for (let i = 1; i <= this.MAX_SIZE; i++) {
      const queueListElement = document.createElement("li");
      queueListElement.textContent = this.queueControl[this.MAX_SIZE - i];
      queueList.appendChild(queueListElement);
    }

    if (!this.canEnqueue()) {
      const queueListElement = document.createElement("li");
      queueListElement.textContent = "Queue Overflow";
      queueListElement.classList.add("queue-overflow");
      queueList.insertBefore(queueListElement, queueList.children[0]);
    }
  }
}
