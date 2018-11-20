function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 5;
  this.isEmpty = function () {
    if (this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  this.canEnqueue = function () {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    };
  };
  this.enqueue = function (number) {
    if (this.canEnqueue() === true) {
      this.queueControl.unshift (number);
      return this.queueControl;
      } else {
        return 'Queue Overflow'
      }
  };
  this.dequeue = function () {
    if (this.isEmpty() === false) {
      return this.queueControl.pop ();
    } else {
      return 'Queue Underflow'
    }
  };

};

var queue = new QueueDataStructure ();

$(document).ready(function() {

  $('.overq').toggle();
  document.getElementById("openq").disabled = true;

  $('.addq').click(function () {
  if ($('.inputq')[0].value.length == 0) {
    alert ('No introdujo ningún valor');
  } else {
    for (i = 8; i < 13; i++) {
      $('h3')[i].innerHTML = '';
    }

    console.log(queue.enqueue($('.inputq')[0].value));

    if (queue.queueControl.length === 1) {
      document.getElementById("openq").disabled = false;
      $('.emptyq').toggle();
      }  

    if (queue.canEnqueue() === false) {
      document.getElementById("closeq").disabled = true;
      $('.overq').toggle();    
      for (i = 0; i < queue.queueControl.length; i++) {
        $('h3')[i+8].innerHTML = queue.queueControl[i];
      }
    } else {
      
      for (i = 0; i < queue.queueControl.length; i++) {
        $('h3')[i+8].innerHTML = queue.queueControl[i];
      }
    }
  }
  });


  $('.takeq').click(function () {
    for (i = 8; i < 13; i++) {
      $('h3')[i].innerHTML = '';
    }

    queue.dequeue();

    if (queue.queueControl.length === 4) {
    document.getElementById("closeq").disabled = false;
    $('.overq').toggle();
    }  

    if (queue.isEmpty() === true) {
      document.getElementById("openq").disabled = true;
      $('.emptyq').toggle();    
      for (i = 0; i < queue.queueControl.length; i++) {
        $('h3')[i+8].innerHTML = queue.queueControl[i];
      }
    } else {
      for (i = 0; i < queue.queueControl.length; i++) {
        $('h3')[i+8].innerHTML = queue.queueControl[i];
      }
    }
  });

})
