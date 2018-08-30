function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function () {
  if (this.stackControl.length == 0) {
    return true;
  } else {
    return false;
  }
}

StackDataStructure.prototype.canPush = function () {
  if (this.stackControl.length >= this.MAX_SIZE) {
    return false;
  } else {
    return true;
  }
}

StackDataStructure.prototype.push = function (element) {
  if (this.canPush() == true) {
    this.stackControl.push(element);
    return this.stackControl;
  } else {
    return "Stack Overflow"
  }
}

StackDataStructure.prototype.pop = function (element) {

  if (this.isEmpty() == false) {
    return this.stackControl.pop();
 
  } else {
    return "Stack Underflow";
  }
}


// var addAWord = function() {
//   

$("#addbutton").click(function()) {
    $("#1").text("Hola")
  }





// if (StackDataStructure.stackControl.length == 0)



// var str = $("#5").text("Hola")