describe("Stack", function() {
  var stack;

  beforeEach (function() {
    stack = new StackDataStructure();
  });

  describe ("Stack properties", function () {
    it ("Should has an array to add the elements to the stack", function () {
      expect(Array.isArray(stack.stackControl)).toBe(true); //OK
    });

    it ("Should has a max number of items to avoid the stack overflow", function () {
      expect(typeof(stack.MAX_SIZE)).toBe('number'); //OK
    });
  });

  describe ("Stack methods", function () {
    it ("Should has a method to check if the current stack is empty", function () {
      expect(typeof(stack.isEmpty)).toBe('function'); //OK
    });

    it ("Should has a method to check if we can push elements into the stack", function () {
      expect(typeof(stack.canPush)).toBe('function'); //OK
    });

    it ("Should has a method to push elements into the stack", function () {
      expect(typeof(stack.push)).toBe('function'); //OK
    });

    it ("Should has a method to take elements from the stack", function () {
      expect(typeof(stack.pop)).toBe('function'); //OK
    });
  });

  describe ("Stack methods default values", function () {
    it ("Should has an empty stack", function () {
      expect(stack.isEmpty()).toBe(true); //OK
    });

    it ("Should be able to add a new element in the stack", function () {
      expect(stack.canPush()).toBe(true); //OK
    });
  });

  describe ("Stack methods usage", function () {
    it ("Should add the indicated element to the stack", function () {
      stack.push(19);

      expect(stack.stackControl.length).toBe(1); //OK
    });

    it ("Should return that stack is not empty when adding an element", function () {
      stack.push(19);

      expect(stack.isEmpty()).toBe(false); //OK
    });

    it ("Should return the stack when an element is inserted", function () {
      expect(stack.push(19)).toEqual([19]); //OK
    });

    it ("Should insert the elements in the received order", function () {
      stack.push(19);
      stack.push(88);

      expect(stack.stackControl).toEqual([19, 88]); //OK
    });

    it ("Should return 'Stack Overflow' if the stack is full", function () {
      stack.MAX_SIZE = 1;
      stack.push(19);

      expect(stack.push(88)).toEqual("Stack Overflow"); //OK
    });

    it ("Should return false if the stack is full", function () {
      stack.MAX_SIZE = 1;
      stack.push(19);

      expect(stack.canPush()).toBe(false); //OK
    });

    it ("Should return the last element inserted in the stack", function () {
      stack.push(19);
      stack.push(88);

      expect(stack.pop()).toBe(88); //IT FAILS ON THIS TEST IF THE BELOW TEST IS ACCEPTED!!!
    });

    it ("Should return 'Stack Underflow' if there are no elements in the stack", function () {
      expect(stack.pop()).toBe('Stack Underflow'); //OK
    });
  });
});

describe("Queues", function() {
  var queue;

  beforeEach(function() {
    queue = new QueueDataStructure();
  });

  describe ("Queue properties", function () {
    it ("Should has an array to add the elements to the queue", function () {
      expect(Array.isArray(queue.queueControl)).toBe(true); //OK
    });

    it ("Should has a max number of items to avoid the queue overflow", function () {
      expect(typeof(queue.MAX_SIZE)).toBe('number'); //OK
    });
  });

  describe ("Queue methods", function () {
    it ("Should has a method to check if the current queue is empty", function () {
      expect(typeof(queue.isEmpty)).toBe('function'); //OK
    });

    it ("Should has a method to check if we can enqueue an element into the queue", function () {
      expect(typeof(queue.canEnqueue)).toBe('function'); //OK
    });

    it ("Should has a method to enqueue elements into the queue", function () {
      expect(typeof(queue.enqueue)).toBe('function'); //OK
    });

    it ("Should has a method to dequeue from the queue", function () {
      expect(typeof(queue.dequeue)).toBe('function'); //OK
    });
  });

  describe ("Queue methods default values", function () {
    it ("Queue has an empty stack", function () {
      expect(queue.isEmpty()).toBe(true); //OK
    });

    it ("Should be able to enqueue a new element in the queue", function () {
      expect(queue.canEnqueue()).toBe(true); //OK
    });
  });

  describe ("Queue methods usage", function () {
    it ("Should enqueue the indicated element to the queue", function () {
      queue.enqueue(19);

      expect(queue.queueControl.length).toBe(1); //OK
    });

    it ("Should return that queue is not empty when enqueuing an element", function () {
      queue.enqueue(19);

      expect(queue.isEmpty()).toBe(false); //OK
    });

    it ("Should return the queue when an element is queued", function () {
      expect(queue.enqueue(19)).toEqual([19]); //OK
    });

    it ("Should insert the elements in the reverse received order", function () {
      queue.enqueue(19);
      queue.enqueue(88);

      expect(queue.queueControl).toEqual([88, 19]); //OK
    });

    it ("Should return 'Stack Overflow' if the stack is full", function () {
      queue.MAX_SIZE = 1;
      queue.enqueue(19);

      expect(queue.enqueue(88)).toEqual("Queue Overflow"); //OK
    });

    it ("Should return false if the stack is full", function () {
      queue.MAX_SIZE = 1;
      queue.enqueue(19);

      expect(queue.canEnqueue()).toBe(false); //OK
    });

    it ("Should return the first element inserted in the queue", function () {
      queue.enqueue(19);
      queue.enqueue(88);

      expect(queue.dequeue()).toBe(19); //IT FAILS ON THIS TEST IF THE BELOW TEST IS ACCEPTED!!!
    });

    it ("Should return 'Queue Underflow' if there are no elements in the queue", function () {
      expect(queue.dequeue()).toBe('Queue Underflow'); //OK
    });
  });
});
