function StackDataStructure () {

  this.stackControl = []

  this.MAX_SIZE = 8

  this.isEmpty = function () {

    return this.stackControl.length === 0

  }


  this.canPush = function () {

    return this.stackControl.length !== this.MAX_SIZE

  }


  this.push = function (arg) {

    if(this.stackControl.length === this.MAX_SIZE) {

      return 'Stack Overflow'

    } else {

      this.stackControl.push(arg)

      return [arg]
    }

  }



  this.pop = function () {

    if(this.stackControl.length === 0) {

      return 'Stack Underflow'
  
    } else {

      return this.stackControl.pop()

    }

  }


}
















