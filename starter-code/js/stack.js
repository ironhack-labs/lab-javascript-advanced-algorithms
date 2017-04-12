function StackObject(){
  this.stackLength = 10;
  this.stackArray = [];
  this.numObjs = 0;
}

StackObject.prototype._overFlow = function(){

  if(this.numObjs>=this.stackLength)
  {
    return true;
  }
  else
  {
    return false;
  }

};


StackObject.prototype._underFlow = function(){

  if(this.numObjs===0)
  {
    return true;
  }
  else
  {
    return false;
  }

};

StackObject.prototype.pushObj = function(element){

  if(this._overFlow())
  {
    return false;
  }
  else
  {
    var elementObj = {obj: element , index: this.numObjs };
    console.log("elementObj.index",elementObj.index);
    console.log("this.numObjs",this.numObjs);
    this.numObjs++;
    this.stackArray.push(elementObj);

    return true;
  }

};

StackObject.prototype.popObj = function(){

  if(this._underFlow())
  {
    return ["null",false];
  }
  else
  {
    var tempArray = [];
    var temp = "";
    var self = this;

    this.stackArray.forEach(function(elementObj){
      console.log("elementObj.index",elementObj.index);
      console.log("this.numObjs-1",self.numObjs-1);
      if(elementObj.index !== self.numObjs-1)
      {
        tempArray.push(elementObj);
      }
      else {

        temp = elementObj.obj;
      }
    });

    this.stackArray = tempArray;
    this.numObjs--;

    return [temp,true];
  }

};

//////////////////////////jquery///////////////////////////////////////////

var stackObject;

$(document).ready(function(){

  stackObject = new StackObject();
  $('.extra').css('display','none');

  $('#stack_board').on('click', ".btn", function(){

      var tempId = $(this).attr('id');

      if(tempId === "take-object")
      {

      }
      else if(tempId === "add-object")
      {

      }
  });

  for(var i=0; i<stackObject.stackLength; i++)
  {
    var temp = "#card"+(i).toString();
    temp = temp + "-reversed";
    $(temp).css('display','none');
  }


});
