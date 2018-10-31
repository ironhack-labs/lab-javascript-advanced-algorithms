class QueueDataStructure {
    constructor() {
        this.queue = [];
        this.MAX_SIZE = 10;
    }

    give(item) {
        (this.array.length >= 10) ? console.log("Stack Overflow"): this.array.unshift(item);
        return this.array;
    }

    take() {
        (this.array.length <= 0) ? console.log("Stack Underflow"): this.array.pop();
        return this.array;
    }
}

var stack = new StackDataStructure();