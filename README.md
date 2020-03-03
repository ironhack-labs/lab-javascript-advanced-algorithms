![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Advanced Algorithms

## Learning Goals

In this exercise, you will be able to:

- use data structures to organize your application information,
- learn how to model real-life situations and objects into proper data structures and
- use tests to develop your solution.

## Data Structures

A [data structure](https://en.wikipedia.org/wiki/Data_structure) is a particular way to organize your data so it can be used efficiently. One or more [abstract data types](https://en.wikipedia.org/wiki/Abstract_data_type) can be implemented and they specify the operations that can be performed over a data structure.

In this exercise, we will implement two different abstract data types that are very common: `stacks` and `queues`. Let's see what both data structures to understand how they work.

## Requirements

- Fork this repo
- Then clone this repo.

## Submission

- Upon completion, run the following commands:

```shell
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Useful information

### Stacks

A stack is a simple data structure that allows adding and removing elements in a particular order. Every time an element is added, it goes on the top of the stack. The only element that can be removed is the element that was at the top of the stack.

This data structure is also called **LIFO** queue. LIFO stands for "last in, first out", meaning that the last element we put in the stack, is the first element that will go out.

![Image](https://i.imgur.com/NcuoeUk.png)

**Think about a stack as if it was a stack of books. You can put a book over the others, but you just can take the book on the top of the stack.**

### Queues

Queues are the other abstract data type we are going to see. It is also called a linear data structure. This means that the first element is inserted from one end called **rear**, and the deletion of an existing element takes place from the other end called **front**.

This makes a queue a **FIFO** data structure, which means that the first element inserted, will be the first element removed.

The process of adding an element into the queue is called **enqueue**, and the process of removal of an element from the queue is called **dequeue**.

![](https://i.imgur.com/Qo1SQQ7.png)

**Hint**: Think about a queue as if it was a queue in a bank. When you arrive, you are the last in the line, and you have to wait until it is your turn to being attended.

## Instructions

### Introduction

The goal of this exercise is to create a visual layout to show how stacks and queues work. Here is the demo and your end goal: **[demo-stack-queue](https://sandrabosk.github.io/demo-stack-queue/index.html)**.

This exercise is split into two parts:

- **logic**: where you will be developing the logic behind _stack_ and _queue_, and you will be guided by tests. When working on logic, you will write your code in the `js/stack/stack-data-structure.js` and `js/queue/queue-data-structure.js`;

- **visual**: where you will use your DOM manipulation skills to demonstrate how actually stack and queue work. When you come to this part, you will be working on the `js/stack/stack-dom.js` and `js/queue/queue-dom.js`.

### Tests, tests!

We have created a set of tests to guide you through the abstract data types implementation. After implementing the JavaScript functionality, create a visual layout to show how each data structure works.

Open in your browser the `SpecRunner.html` file to see the set of tests we have created:

![](https://i.imgur.com/dQUAyYL.png)

Go through these tests to build up your libraries with the specified functionality. Let's go step by step:

### Iteration 1

The first abstract data type we are going to build is the `stack`. You have to create the requested methods in the **`js/stack/stack-data-structure.js`** file. In this file, you will find some basic starter code: we defined the class `StackDataStructure` and its properties and methods. Your assignment is to follow the tasks in tests and to build the functioning code that will behave like a stack.

Remember - the `stack` is a **LIFO (Last-In-First-Out)** structure. So you have to add the right methods to add elements (`push()`) to the structure, and it also should have the necessary methods to remove elements from it (`pop()`). **When you take an element, it should be the last one we inserted.**

We should also be careful with Stack Overflow (yes, like the website), and Stack Underflow:

- Stack Overflow occurs when we try to add an element into a stack that is already full.
- Stack Underflow occurs when we try to get an element from an empty stack.

So we will also need to have two methods:

- `canPush()` to check if we can add new elements to the stack (to avoid the stack overflow), and
- `isEmpty()` to check if we can take an element from the stack (to prevent the stack underflow).

If you satisfy the set of tests, you will get a solution with all the necessary implementations.

At this point, you can either proceed to iteration 2 and build the logic for the queue or go ahead and build the visuals for the stack. In case you decide to build visual representation for the stack, you should use your DOM manipulation skills and add the code in `js/stack/stack-dom.js`.

### Iteration 2

The second abstract data type we are going to build is the `queue`. You have to create the requested methods in the `js/queue/queue-data-structure.js` file. The same as in iteration 1, we gave you some starter code. Follow the tests to build a proper queue data structure.

Remember that `queue` is a **FIFO (First-In-First-Out)** structure. You have to add the right methods to add (`enqueue()`) elements to the structure, and it also should have the necessary methods to remove (`dequeue()`) elements from it in the same order we added them.

The same as we mentioned for the stack, we should be careful with Queue Overflow and Queue Underflow:

- Queue Overflow occurs when we try to add an element into a queue that is already full.
- Queue Underflow occurs when we try to get an element from an empty queue.

So we will also need to have two methods:

- `canEnqueue()` to check if we can add new elements to the queue (it will avoid the queue overflow), and
- `isEmpty()` to check if we can remove an element from the queue (it will avoid the queue underflow).
  If you follow the set of tests, you will get a solution with all the necessary implementations.

### Iteration 3

And let's go to the visuals! Once you have created the full functionality, let's create a visual representation to see how these stacks and queues work.
We already provided you with full HTML code in the `index.html`. Also, we gave you a head start in the `js/stack/stack-dom.js` and `js/queue/queue-dom.js`.

<!-- Here we propose how we could visually represent the different steps of the stack structure.
#### Initial layout
![](https://i.imgur.com/H9aF8YH.png)
#### Add an element
![](https://i.imgur.com/b1ndy2j.png)
#### Take an element
![](https://i.imgur.com/mVklHXR.png)
#### Stack Overflow
![](https://i.imgur.com/oZnRXva.png)
#### Stack Underflow
![](https://i.imgur.com/AiGT158.png) -->

<br>

**Happy coding!** :heart:

## Extra Resources

- [Data Structures](https://en.wikipedia.org/wiki/Data_structure)
- [Stacks](http://www.studytonight.com/data-structures/stack-data-structure)
- [Queues](http://www.studytonight.com/data-structures/queue-data-structure)
