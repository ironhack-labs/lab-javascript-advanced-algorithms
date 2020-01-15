class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  isEmpty() {
    return this.stackControl.length ? false : true;
  }

  canPush() {
    return this.stackControl.length >= this.MAX_SIZE ? false : true;
  }

  push(el) {
    if (this.canPush()) {
      this.stackControl.push(el);
      return this.stackControl;
    } else return "Stack Overflow";
  }

  pop() {
    return !this.isEmpty() ? this.stackControl.pop() : "Stack Underflow";
  }

  render() {
    const stackList = document.querySelector("#stack .list");
    stackList.innerHTML = "";
    if (this.isEmpty()) {
    }

    for (let i = 1; i <= this.MAX_SIZE; i++) {
      const stackListElement = document.createElement("li");
      stackListElement.textContent = this.stackControl[this.MAX_SIZE - i];
      stackList.appendChild(stackListElement);
    }

    if (!this.canPush()) {
      const stackListElement = document.createElement("li");
      stackListElement.textContent = "Stack Overflow";
      stackListElement.classList.add("stack-overflow");
      stackList.insertBefore(stackListElement, stackList.children[0]);
    }
  }
}

const stack = new StackDataStructure();
console.log(stack);
