function StackDataStructure() {
  return {
    MAX_SIZE: 8,
    stackControl: [],
    isEmpty: function() {
      return this.stackControl.length === 0;
    },
    canPush: function() {
      return this.stackControl.length < this.MAX_SIZE;
    },
    push: function(item) {
      if (this.canPush()) {
        this.stackControl.push(item);
        return this.stackControl;
      }
      return "Stack Overflow";
    },
    pop: function() {
      if (!this.isEmpty()) {
        return this.stackControl.pop();
      }
      return "Stack Underflow";
    }
  };
}
