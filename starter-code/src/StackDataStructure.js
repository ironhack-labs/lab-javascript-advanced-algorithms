function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 5;
  this.isEmpty = function () {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  this.canPush = function () {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    };
  };
  this.push = function (number) {
    if (this.canPush() === true) {
    this.stackControl.push (number);
    return this.stackControl;
    } else {
      return 'Stack Overflow'
    }
  };
  this.pop = function () {
    if (this.isEmpty() === false) {
      return this.stackControl.pop ();
    } else {
      return 'Stack Underflow'
    }
  };
};

var stack = new StackDataStructure ();

$(document).ready(function() {

  $('.over').toggle();
  document.getElementById("open").disabled = true;

  $('.add').click(function () {
  if ($('.input')[0].value.length == 0) {
    alert ('No introdujo ningún valor');
  } else {
    for (i = 1; i < 6; i++) {
      $('h3')[i].innerHTML = '';
    }

    console.log(stack.push($('.input')[0].value));

    if (stack.stackControl.length === 1) {
      document.getElementById("open").disabled = false;
      $('.empty').toggle();
      }  

    if (stack.canPush() === false) {
      document.getElementById("close").disabled = true;
      $('.over').toggle();    
      for (i = 0; i < stack.stackControl.length; i++) {
        $('h3')[5-i].innerHTML = stack.stackControl[i];
      }
    } else {
      
      for (i = 0; i < stack.stackControl.length; i++) {
        $('h3')[5-i].innerHTML = stack.stackControl[i];
      }
    }
  }
  });


  $('.take').click(function () {
    for (i = 1; i < 6; i++) {
      $('h3')[i].innerHTML = '';
    }

    stack.pop();

    if (stack.stackControl.length === 4) {
    document.getElementById("close").disabled = false;
    $('.over').toggle();
    }  

    if (stack.isEmpty() === true) {
      document.getElementById("open").disabled = true;
      $('.empty').toggle();    
      for (i = 0; i < stack.stackControl.length; i++) {
        $('h3')[5-i].innerHTML = stack.stackControl[i];
      }
    } else {
      for (i = 0; i < stack.stackControl.length; i++) {
        $('h3')[5-i].innerHTML = stack.stackControl[i];
      }
    }
  });

})

