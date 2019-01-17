// Queue class 
class Queue {
    // Array is used to implement a Queue 
    constructor() {
        this.storage = {};
        this.count = 0;
        this.lowestCount = 0;

    }
    // enqueue function 
    enqueue(element) {
        // adding element to the queue 
        if(element){
            this.storage[this.count] = element;
        }
    }
    // dequeue function 
    dequeue() {

        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    // front function 
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }
    // isEmpty function 
    isEmpty() {
        return this.items.length == 0;
    }
    // printQueue function 
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

} 
