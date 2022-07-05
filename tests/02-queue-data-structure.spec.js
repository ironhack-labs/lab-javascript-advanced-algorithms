describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('Property "queueControl"', () => {
    it('should be an array used to store the elements of the queue', () => {
      expect(Array.isArray(queue.queueControl)).toBe(true);
    });
  });

  describe('Property "MAX_SIZE"', () => {
    it('should be a maximum number of items to avoid the queue overflow', () => {
      expect(typeof queue.MAX_SIZE).toBe('number');
    });
  });

  describe('Method "canEnqueue"', () => {
    it('should be declared', () => {
      expect(typeof queue.canEnqueue).toBe('function');
    });

    it('should return true if queue is empty', () => {
      expect(queue.canEnqueue()).toBe(true);
    });

    it('should return false if queue is full', () => {
      queue.MAX_SIZE = 1;
      queue.queueControl.push(1);
      expect(queue.canEnqueue()).toBe(false);
    });
  });

  describe('Method "isEmpty"', () => {
    it('should be declared', () => {
      expect(typeof queue.isEmpty).toBe('function');
    });

    it('should return true if queue is empty, false if it contains any elements', () => {
      expect(queue.isEmpty()).toBe(true);
    });

    it('should return false if queue contains any elements', () => {
      queue.queueControl.push(1);
      expect(queue.isEmpty()).toBe(false);
    });
  });

  describe('Method "enqueue"', () => {
    it('should be declared', () => {
      expect(typeof queue.enqueue).toBe('function');
    });

    it('should add the indicated element to the end of the queue', () => {
      const value = 19;
      queue.enqueue(value);
      expect(queue.queueControl.length).toBe(1);
      expect(queue.queueControl[queue.queueControl.length - 1]).toBe(value);
    });

    it('should return the queue when an element is inserted', () => {
      expect(queue.enqueue(19)).toEqual([19]);
    });

    it('should insert the elements in the received order', () => {
      queue.enqueue(19);
      queue.enqueue(88);
      expect(queue.queueControl).toEqual([19, 88]);
    });

    it('should throw error with message "QUEUE_OVERFLOW" if the queue is full', () => {
      queue.MAX_SIZE = 1;
      queue.enqueue(19);
      expect(() => queue.enqueue(88)).toThrow(new Error('QUEUE_OVERFLOW'));
    });
  });

  describe('Method "dequeue"', () => {
    it('should be declared', () => {
      expect(typeof queue.dequeue).toBe('function');
    });

    it('should return the element removed from the beggining of the queue', () => {
      queue.enqueue(19);
      queue.enqueue(88);
      expect(queue.dequeue()).toBe(19);
    });

    it('should throw error with message "QUEUE_UNDERFLOW" if there are no elements in the queue', () => {
      expect(() => queue.dequeue()).toThrow(new Error('QUEUE_UNDERFLOW'));
    });
  });  

  describe('Method "display"', () => {
    it('should be declared', () => {
      expect(typeof queue.display).toBe('function');
    });

    it('should return contents of queue', () => {
      queue.enqueue(10);
      expect(queue.display()).toEqual([10]);
    });
  });

});
