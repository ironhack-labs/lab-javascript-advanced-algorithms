describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
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

  describe('Method "canPush"', () => {
    it('should be declared', () => {
      expect(typeof stack.canPush).toBe('function');
    });

    it('should return true if stack is empty', () => {
      expect(stack.canPush()).toBe(true);
    });

    it('should return false if stack is full', () => {
      stack.MAX_SIZE = 1;
      stack.stackControl.push(1);
      expect(stack.canPush()).toBe(false);
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

    it('should throw error with message "STACK_OVERFLOW" if the stack is full', () => {
      stack.MAX_SIZE = 1;
      stack.push(19);
      expect(() => stack.push(88)).toThrow(new Error('STACK_OVERFLOW'));
    });
  });

  describe('Method "pop"', () => {
    it('should be declared', () => {
      expect(typeof stack.pop).toBe('function');
    });

    it('should return the element removed from the end of the stack', () => {
      stack.push(19);
      stack.push(88);
      expect(stack.pop()).toBe(88);
    });

    it('should throw error with message "STACK_UNDERFLOW" if there are no elements in the stack', () => {
      expect(() => stack.pop()).toThrow(new Error('STACK_UNDERFLOW'));
    });
  });

  describe('Method "display"', () => {
    it('should be declared', () => {
      expect(typeof stack.display).toBe('function');
    });

    it('should return contents of stack', () => {
      stack.push(10);
      expect(stack.display()).toEqual([10]);
    });
  });  
});

