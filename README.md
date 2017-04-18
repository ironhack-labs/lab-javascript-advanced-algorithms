![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Advanced Algorithms

## Learning Goals

In this exercise, you will be able to:

- Use data structures to organize your application information
- Learn how to model real-life situations and objects into proper data structures
- Use tests to develop your solution


## Data Structures

A [data structure](https://en.wikipedia.org/wiki/Data_structure) is a particular way to organize your data in the computer so it can be used efficiently. One or more [abstract data types](https://en.wikipedia.org/wiki/Abstract_data_type) can be implemented and they specify the operations that can be performed over a data structure.

In this exercise we will implement two different abstract data types that are very common: `stacks` and `queues`. Let's see what both data structures to understand how they work.

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables

Create your Pull request with everything you need to run your game properly.

### Stacks

 stack is a simple data structure that allows adding and removing elements in a particular order. Every time an element is added, it goes on the top of the stack. The only element that can be removed is the element that was at the top of the stack.

This data structure is also called LIFO queue. LIFO stands for "last in, first out", meaning that the last element we put in the stack, is the first element that will go out.

![Image](https://i.imgur.com/NcuoeUk.png)

**Think about a stack as if it was a stack of books. You can put a book over the others, but you just can take the book on the top of the stack.**


### Queues

Queues are the other abstract data type we are going to see. It's also called as linear data structure, in which the first element is inserted from one end called **rear**, and the deletion of an existing element takes place from the other end called as **front**.

This makes a queue a FIFO data structure, which means that the first element inserted, will be the first element removed.

The process to add an element into queue is called **enqueue**, and the process of removal of an element from queue is called **dequeue**.

![](https://i.imgur.com/Qo1SQQ7.png)

**Hint**: Think about a queue as if it was a queue in a bank. When you arrive, you are the last in the line, and you have to wait until it's your turn to being attended.

## Exercise

### Introduction

The goal of this exercise is to create a visual layout to show how stacks and queues work. We will do it by using advanced JavaScript concepts like closures, scope, context, method invocation...

We have created a set of tests to guide you through the abstract data types implementation. After implementing the JavaScript functionality, create a visual layout to show how each data structure works.

### Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- Make sure you pass all the tests
- Make sure to use JavaScript closures, scope, shadowing, hoisting, context, and method invocation

### Submission

- Upon completion, run the following commands

	```
	git add .
	git commit -m"done"
	git push origin master
	```

- Navigate to your repo and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

### Starter code

Open in you browser the `SpecRunner.html` file to see the set of tests we have created:

![](https://i.imgur.com/dQUAyYL.png)

Go through this tests to build up your libraries with the specified functionality. Let's go step by step:

### First iteration

The first abstract data type we are going to build is the `Stack`. You have to create the requested methods in the `/src/StackDataStructure.js` file.

Remember that `Stack` is a LIFO (Last-in First-out) structure. So you have to add the right methods to add elements to the structure, and it also should has the necessary methods to remove elements from it. When you take an element, it should be the last one we inserted.

We should also be careful with Stack Overflow (yes, like the website), and Stack Underflow:

- Stack Overflow occurs when we try to add an element into an stack that is already full.
- Stack Underflow occurs when we try to get an element from an empty stack.

So we will also need to have two methods, one to check if we can add new elements to the stack (to avoid the stack overflow), and another one to check if we can take an element from the stack (to avoid the stack underflow).

If you satisfy the set of tests, you will get a solution with all the necessary implementations :)

**You can't use the append or prepend jQuery methods to do this exercise. The goal is not to do the exercise fast, but to have a first approach with the Data Structures.**

### Second iteration

The second abstract data type we are going to build is the `Queue`. You have to create the requested methods in the `/src/QueueDataStructure.js` file.

Remember that `Queue` is a FIFO (First-in First-out) structure. So you have to add the right methods to add elements to the structure, and it also should has the necessary methods to remove elements from it in the same order we added them.

We should also be careful with Queue Overflow, and Queue Underflow:

- Queue Overflow occurs when we try to add an element into a queue that is already full.
- Queue Underflow occurs when we try to get an element from an empty queue.

So we will also need to have two methods, one to check if we can add new elements to the queue (it will avoid the queue overflow), and another one to check if we can remove an element from the queue (it will avoid the queue underflow).

If you follow the set of tests, you will get a solution with all the necessary implementations :)

**Again, you can't use the append or prepend jQuery methods to do this exercise. Remember that the goal is not to do the exercise fast, but to understand these Data Structures.**

### Third iteration

Once we have created all the functionality, let's create a visual representation to see how these stacks and queues work. You have to consider all the options we have coded!

Here we propose how we could visually represent the different steps of the stack structure.

#### Initial layout

![](https://i.imgur.com/H9aF8YH.png)

#### Add an element

![](https://i.imgur.com/b1ndy2j.png)

#### Take an element

![](https://i.imgur.com/mVklHXR.png)

#### Stack Overflow

![](https://i.imgur.com/oZnRXva.png)

#### Stack Underflow

![](https://i.imgur.com/AiGT158.png)

## Extra Resources

- [Data Structures](https://en.wikipedia.org/wiki/Data_structure)
- [Stacks](http://www.studytonight.com/data-structures/stack-data-structure)
- [Queues](http://www.studytonight.com/data-structures/queue-data-structure)
