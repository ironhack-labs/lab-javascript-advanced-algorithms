function QueueDataStructure () {

  this.queueControl = []

  this.MAX_SIZE = 10

  this.isEmpty = function () {

    return this.queueControl.length === 0

  }


  this.canEnqueue = function () {

    return this.queueControl.length !== this.MAX_SIZE

  }


  this.enqueue = function (arg) {

    if(this.queueControl.length === this.MAX_SIZE) {

      return "Queue Overflow"

    } else {

      this.queueControl.unshift(arg)

      // return this.stackControl
      return [arg]
    }

  }



  this.dequeue = function () {

    if(this.queueControl.length === 0) {

      return 'Queue Underflow'
  
    } else {

      return this.queueControl.pop()

    }

  }

}
