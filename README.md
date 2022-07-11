![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Advanced Algorithms

## Learning Goals

After this exercise, you will be able to:

- Use stack and queue data structures to organize your application information
- Learn how to model real-life situations and objects into proper data structures
- Develop your code solution in accordance with the tests.

<br>

## Data Structures

A [data structure](https://en.wikipedia.org/wiki/Data_structure) is a particular way to organize your data so it can be used efficiently. One or more [abstract data types](https://en.wikipedia.org/wiki/Abstract_data_type) can be implemented and they specify the operations that can be performed over a data structure.

In this exercise, we will implement two different abstract data types that are very common: `stacks` and `queues`. Let's take a look at both data structures to understand how they work.

<br>

## Requirements

- Fork this repo.
- Clone this repo.

<br>

## Submission

- Upon completion, run the following commands:

```shell
$ git add .
$ git commit -m "Solved lab"
$ git push origin master
```

- Create a Pull Request so that your TAs can check your work.



<br>

## Test Your Code

This LAB is equipped with unit tests to provide automated feedback on your lab progress. In case you want to check the tests, the files are located in the `tests/` folder.



To run the tests and your JavaScript code, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.



To see the outputs of the `console.log` in your JavaScript code, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>





## Instructions

The goal of this exercise is to create a visual layout to show how stacks and queues work. Here is the demo and your end goal: **[demo-stack-queue](https://sandrabosk.github.io/demo-stack-queue/index.html)**.

This exercise is split into two parts:

- **Logic**: where you will be developing the logic behind _stack_ and _queue_, and you will be guided by tests. When working on logic, you will write your code in the `src/stack/stack-data-structure.js` and `src/queue/queue-data-structure.js`;

- **Visual**: where you will use your DOM manipulation skills to demonstrate how actually stack and queue work. When you come to this part, you will be working on the `src/stack/stack-dom.js` and `src/queue/queue-dom.js`.

<br>



## Iteration 0 - Read about Stacks & Queues

### Stacks

A stack is a simple data structure that allows adding and removing elements in a particular order. Every time you add a new element, it goes on the top of the stack. The only element that can be removed is the element that was at the top of the stack.

This data structure is also called a **LIFO** data structure. LIFO stands for "_last in, first out_", meaning that the last element we put in the stack, is the first element that will go out.

![Image](https://i.imgur.com/NcuoeUk.png)

**Hint:** Think about LIFO data structure as if it were a stack of books. You can put a book on top of the others, and you only remove books from the top of the pile.

<br>

### Queues

Queues are the other abstract data type we are going to be looking at. They are also referred to as a linear data structure. This means that the first element is inserted from one end called **rear**, and the deletion of an existing element takes place from the other end called **front**.

This makes a queue a **FIFO** ("_first in, first out_") data structure, which means that the first element inserted, will also be the first element removed.

The process of adding an element into the queue is called **enqueue**, and the process of removal of an element from the queue is called **dequeue**.

![](https://i.imgur.com/Qo1SQQ7.png)

**Hint**: Think about a queue as if it was a line in a supermarket. When you arrive, you are the last in the line, and the next person to pay for their groceries is the one that had arrived first.

<br>





### Iteration 1 - The Stack class

The first abstract data structure we are going to build is the `Stack`. For this iteration, you'll be working in the **`src/stack/stack-data-structure.js`** file. 

The tests you will be using while developing the solution are in the `tests/01-stack-data-structure.spec.js` file.

<br>

To start, we've provided you with a `Stack` class. `Stack` has been given a `constructor` where a `stackControl` array has been initialized, and a `MAX_SIZE` property declared. `stackControl` will be used to store the items inside of our stack, and `MAX_SIZE` determines the maximum amount of items that can be held by the stack.

Remember, the `stack` is a **LIFO (Last-In-First-Out)** structure. That means that, **when taking an element out, it should be the last one that had been inserted**. In the end, you'll see that a `Stack` behaves essentially like a JavaScript `Array`. Our goal is to study how that logic could be implemented from scratch.

We'll also have to pay attention to any possible **Stack Overflow** (yes, like the website), and **Stack Underflow**:

- Stack Overflow occurs when we try to add an element into a stack that is already full.
- Stack Underflow occurs when we try to get an element from an empty stack.

#### Stack method `canPush`

Add a method called `canPush` to the Stack class.

When called, `canPush` should return `true` if the stack is not full, `false` if it is full.

#### Stack method `isEmpty`

Add a method called `isEmpty` to the Stack class.

When called, `isEmpty` should return `true` if the stack is empty, `false` if it holds any item.

#### Stack method `push`

Add a method called `push` to the Stack class. It should accept one argument, an item to be added to the **end** of the stack.

When `push` is called, you should first check whether the stack can take any items. To do so, you can call the stack's `canPush` method.

If the value returned by `canPush` is `true`, you should add the item to the `stackControl` array available in the stack.

If the value returned is `false`, we have a case of "**Stack Overflow**". Stack Overflow occurs when we try to add an element into a stack that is already full. This operation shouldn't be allowed. As such, instead of adding the item the the `stackControl` array, throw an error with the message `'STACK_OVERFLOW'`.

```js
throw new Error('STACK_OVERFLOW');
```

#### Stack method `pop`

Add a method called `pop` to the Stack class. `pop` will be used to remove the **last** element in the stack.

When `pop` is called, you should first check whether the stack holds any items. To do so, you can call the stack's `isEmpty` method.

If the value returned by `isEmpty` is `false`, you should remove the last item of the `stackControl` array.

If the value returned by `isEmpty` is `true`, we have a case of "**Stack Underflow**". Stack Underflow occurs when we try to remove an item from an empty stack. This operation shouldn't be allowed. As such, we should throw an error with the message `'STACK_UNDERFLOW'`.

#### Stack method `display`

Lastly, let's add a method called `display` to the Stack class. The method should simply return the list of items stored in the stack.

<br>

### Iteration 2 - The Queue class

The second abstract data type we are going to build is the `Queue`. For this iteration, you'll be working in the **`src/queue/queue-data-structure.js`** file.
The tests you will be using while developing the solution are in the `tests/02-queue-data-structure.spec.js` file.

<br>

`Queue` has been given a `constructor` where a `queueControl` array has been initialized, and a `MAX_SIZE` property declared. `queueControl` will be used to store the items inside of our queue, and `MAX_SIZE` determines the maximum amount of items that can be held by the queue.

Remember that `queue` is a **FIFO (First-In-First-Out)** structure. That means that, **when taking an element out, it should be the first one that had been inserted**.

You have to add the right methods to add (`enqueue()`) elements to the structure, and it also should have the necessary methods to remove (`dequeue()`) elements from it in the same order we added them.

Similar to the edge scenarios we had to cover for the `Stack` data structure, we'll have to be aware of **Queue Overflow** and **Queue Underflow**.

- Queue Overflow occurs when we try to add an element into a queue that is already full.
- Queue Underflow occurs when we try to get an element from an empty queue.

#### Queue method `canEnqueue`

Add a method called `canEnqueue` to the Queue class.

When called, `canEnqueue` should return `true` if the queue is not full, `false` if it is full.

#### Queue method `isEmpty`

Add a method called `isEmpty` to the Queue class.

When called, `isEmpty` should return `true` if the queue is empty, `false` if it holds any item.

#### Queue method `enqueue`

Add a method called `enqueue` to the Queue class. It should accept one argument, an item to be added to the **end** of the queue.

When `enqueue` is called, you should first check whether the queue can take any items. To do so, you can call the queue's `canEnqueue` method.

If the value returned by `canEnqueue` is `true`, you should add the item to the `queueControl` array available in the queue.

If the value returned is `false`, we have a case of "**Queue Overflow**". Queue Overflow occurs when we try to add an element into a queue that is already full. This operation shouldn't be allowed. As such, instead of adding the item the the `queueControl` array, throw an error with the message `'QUEUE_OVERFLOW'`.

```js
throw new Error('QUEUE_OVERFLOW');
```

#### Queue method `dequeue`

Add a method called `dequeue` to the Queue class. `dequeue` will be used to remove the **first** element in the queue. This is the main differentiating point between a Stack and a Queue.

When `dequeue` is called, you should first check whether the queue holds any items. To do so, you can call the queue's `isEmpty` method.

If the value returned by `isEmpty` is `false`, you should remove the first item of the `queueControl` array.

If the value returned by `isEmpty` is `true`, we have a case of "**Queue Underflow**". Queue Underflow occurs when we try to remove an item from an empty queue. This operation shouldn't be allowed. As such, we should throw an error with the message `'QUEUE_UNDERFLOW'`.

#### Queue method `display`

Lastly, let's add a method called `display` to the Queue class. The method should simply return the list of items stored in the queue.

<br>

### Iteration 3 - Visualizing our data structures

And let's go to the visuals! Once you have created the full functionality, let's create a visual representation to see how these stacks and queues work.

We already provided you with full HTML code in the `index.html`. Also, we gave you a head start in the `src/stack/stack-dom.js` and `src/queue/queue-dom.js`.

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

Most of the bare-bones are already implemented, and the interface is self-explanatory. Make it work to the best of your ability.

<br>

**Happy coding!** :heart:

<br>

## Extra Resources

- [Data Structures](https://en.wikipedia.org/wiki/Data_structure)
- [Stacks](http://www.studytonight.com/data-structures/stack-data-structure)
- [Queues](http://www.studytonight.com/data-structures/queue-data-structure)
