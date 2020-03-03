describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new StackDataStructure();
  });

  describe('Stack properties', () => {
    it('Should has an array to add the elements to the stack', () => {
      expect(Array.isArray(stack.stackControl)).toBe(true);
    });

    it('Should has a max number of items to avoid the stack overflow', () => {
      expect(typeof stack.MAX_SIZE).toBe('number');
    });
  });

  describe('Stack methods', () => {
    it('Should has a method to check if the current stack is empty', () => {
      expect(typeof stack.isEmpty).toBe('function');
    });

    it('Should has a method to check if we can push elements into the stack', () => {
      expect(typeof stack.canPush).toBe('function');
    });

    it('Should has a method to push elements into the stack', () => {
      expect(typeof stack.push).toBe('function');
    });

    it('Should has a method to take elements from the stack', () => {
      expect(typeof stack.pop).toBe('function');
    });
  });

  describe('Stack methods default values', () => {
    it('Should has an empty stack', () => {
      expect(stack.isEmpty()).toBe(true);
    });

    it('Should be able to add a new element in the stack', () => {
      expect(stack.canPush()).toBe(true);
    });
  });

  describe('Stack methods usage', () => {
    it('Should add the indicated element to the stack', () => {
      stack.push(19);

      expect(stack.stackControl.length).toBe(1);
    });

    it('Should return that stack is not empty when adding an element', () => {
      stack.push(19);

      expect(stack.isEmpty()).toBe(false);
    });

    it('Should return the stack when an element is inserted', () => {
      expect(stack.push(19)).toEqual([19]);
    });

    it('Should insert the elements in the received order', () => {
      stack.push(19);
      stack.push(88);

      expect(stack.stackControl).toEqual([19, 88]);
    });

    it("Should return 'Stack Overflow' if the stack is full", () => {
      stack.MAX_SIZE = 1;
      stack.push(19);

      expect(stack.push(88)).toEqual('Stack Overflow');
    });

    it('Should return false if the stack is full', () => {
      stack.MAX_SIZE = 1;
      stack.push(19);

      expect(stack.canPush()).toBe(false);
    });

    it('Should return the last element inserted in the stack', () => {
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

  describe('Queue properties', () => {
    it('Should has an array to add the elements to the queue', () => {
      expect(Array.isArray(queue.queueControl)).toBe(true);
    });

    it('Should has a max number of items to avoid the queue overflow', () => {
      expect(typeof queue.MAX_SIZE).toBe('number');
    });
  });

  describe('Queue methods', () => {
    it('Should has a method to check if the current queue is empty', () => {
      expect(typeof queue.isEmpty).toBe('function');
    });

    it('Should has a method to check if we can enqueue an element into the queue', () => {
      expect(typeof queue.canEnqueue).toBe('function');
    });

    it('Should has a method to enqueue elements into the queue', () => {
      expect(typeof queue.enqueue).toBe('function');
    });

    it('Should has a method to dequeue from the queue', () => {
      expect(typeof queue.dequeue).toBe('function');
    });
  });

  describe('Queue methods default values', () => {
    it('Queue has an empty stack', () => {
      expect(queue.isEmpty()).toBe(true);
    });

    it('Should be able to enqueue a new element in the queue', () => {
      expect(queue.canEnqueue()).toBe(true);
    });
  });

  describe('Queue methods usage', () => {
    it('Should enqueue the indicated element to the queue', () => {
      queue.enqueue(19);

      expect(queue.queueControl.length).toBe(1);
    });

    it('Should return that queue is not empty when enqueuing an element', () => {
      queue.enqueue(19);

      expect(queue.isEmpty()).toBe(false);
    });

    it('Should return the queue when an element is queued', () => {
      expect(queue.enqueue(19)).toEqual([19]);
    });

    it('Should insert the elements in the reverse received order', () => {
      queue.enqueue(19);
      queue.enqueue(88);

      expect(queue.queueControl).toEqual([88, 19]);
    });

    it("Should return 'Stack Overflow' if the stack is full", () => {
      queue.MAX_SIZE = 1;
      queue.enqueue(19);

      expect(queue.enqueue(88)).toEqual('Queue Overflow');
    });

    it('Should return false if the stack is full', () => {
      queue.MAX_SIZE = 1;
      queue.enqueue(19);

      expect(queue.canEnqueue()).toBe(false);
    });

    it('Should return the first element inserted in the queue', () => {
      queue.enqueue(19);
      queue.enqueue(88);

      expect(queue.dequeue()).toBe(19);
    });

    it("Should return 'Queue Underflow' if there are no elements in the queue", () => {
      expect(queue.dequeue()).toBe('Queue Underflow');
    });
  });
});
