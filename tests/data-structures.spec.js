const StackDataStructure = require('../js/stack/stack-data-structure');
const QueueDataStructure = require('../js/queue/queue-data-structure');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new StackDataStructure();
  });

  describe('Property "stackControl"', () => {
    it('should be an array used to store the elements of the stack', () => {
      expect(Array.isArray(stack.stackControl)).toBe(true);
    });
  });

  describe('Property "MAX_SIZE"', () => {
    it('should be a maximum number of items to avoid the stack overflow', () => {
      expect(typeof stack.MAX_SIZE).toBe('number');
    });
  });

  describe('Method "isEmpty"', () => {
    it('should be declared', () => {
      expect(typeof stack.isEmpty).toBe('function');
    });

    it('should return true if stack is empty, false if it contains any elements', () => {
      expect(stack.isEmpty()).toBe(true);
    });

    it('should return false if stack contains any elements', () => {
      stack.stackControl.push(1);
      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe('Method "canPush"', () => {
    it('should be declared', () => {
      expect(typeof stack.canPush).toBe('function');
    });

    it('should return true is stack is empty', () => {
      expect(stack.canPush()).toBe(true);
    });

    it('should return false if stack is full', () => {
      stack.MAX_SIZE = 1;
      stack.stackControl.push(1);
      expect(stack.canPush()).toBe(false);
    });
  });

  describe('Method "push"', () => {
    it('should be declared', () => {
      expect(typeof stack.push).toBe('function');
    });

    it('should add the indicated element to the stack', () => {
      const value = 19;
      stack.push(value);
      expect(stack.stackControl.length).toBe(1);
      expect(stack.stackControl[stack.stackControl.length - 1]).toBe(value);
    });

    it('should return the stack when an element is inserted', () => {
      expect(stack.push(19)).toEqual([19]);
    });

    it('should insert the elements in the received order', () => {
      stack.push(19);
      stack.push(88);
      expect(stack.stackControl).toEqual([19, 88]);
    });

    it("Should return 'Stack Overflow' if the stack is full", () => {
      stack.MAX_SIZE = 1;
      stack.push(19);
      expect(stack.push(88)).toEqual('Stack Overflow');
    });
  });

  describe('Method "pop"', () => {
    it('should be declared', () => {
      expect(typeof stack.pop).toBe('function');
    });

    it('should return the last element inserted in the stack', () => {
      stack.push(19);
      stack.push(88);
      expect(stack.pop()).toBe(88);
    });

    it("Should return 'Stack Underflow' if there are no elements in the stack", () => {
      expect(stack.pop()).toBe('Stack Underflow');
    });
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new QueueDataStructure();
  });

  describe('Properties', () => {
    it('should have an array to add the elements to the queue', () => {
      expect(Array.isArray(queue.queueControl)).toBe(true);
    });

    it('should have a max number of items to avoid the queue overflow', () => {
      expect(typeof queue.MAX_SIZE).toBe('number');
    });
  });

  describe('Methods', () => {
    it('should have a method to check if the current queue is empty', () => {
      expect(typeof queue.isEmpty).toBe('function');
    });

    it('should have a method to check if we can enqueue an element into the queue', () => {
      expect(typeof queue.canEnqueue).toBe('function');
    });

    it('should have a method to enqueue elements into the queue', () => {
      expect(typeof queue.enqueue).toBe('function');
    });

    it('should have a method to dequeue from the queue', () => {
      expect(typeof queue.dequeue).toBe('function');
    });

    it('Queue has an empty stack', () => {
      expect(queue.isEmpty()).toBe(true);
    });

    it('should be able to enqueue a new element in the queue', () => {
      expect(queue.canEnqueue()).toBe(true);
    });

    it('should enqueue the indicated element to the queue', () => {
      queue.enqueue(19);

      expect(queue.queueControl.length).toBe(1);
    });

    it('should return that queue is not empty when enqueuing an element', () => {
      queue.enqueue(19);

      expect(queue.isEmpty()).toBe(false);
    });

    it('should return the queue when an element is queued', () => {
      expect(queue.enqueue(19)).toEqual([19]);
    });

    it('should insert the elements in the reverse received order', () => {
      queue.enqueue(19);
      queue.enqueue(88);

      expect(queue.queueControl).toEqual([88, 19]);
    });

    it("Should return 'Stack Overflow' if the stack is full", () => {
      queue.MAX_SIZE = 1;
      queue.enqueue(19);

      expect(queue.enqueue(88)).toEqual('Queue Overflow');
    });

    it('should return false if the stack is full', () => {
      queue.MAX_SIZE = 1;
      queue.enqueue(19);

      expect(queue.canEnqueue()).toBe(false);
    });

    it('should return the first element inserted in the queue', () => {
      queue.enqueue(19);
      queue.enqueue(88);

      expect(queue.dequeue()).toBe(19);
    });

    it("Should return 'Queue Underflow' if there are no elements in the queue", () => {
      expect(queue.dequeue()).toBe('Queue Underflow');
    });
  });
});
