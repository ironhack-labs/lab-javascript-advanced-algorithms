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
    return ["null",false];
  }
  else
  {
    var elementObj = {obj: element , index: this.numObjs };
    console.log("elementObj.index",elementObj.index);
    this.numObjs++;
    console.log("this.numObjs",this.numObjs);
    this.stackArray.push(elementObj);

    return [elementObj,true];
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

      if(elementObj.index !== self.numObjs-1)
      {
        tempArray.push(elementObj);
      }
      else {

        temp = elementObj;
        console.log("elementObj.index",elementObj.index);
      }
    });

    this.stackArray = tempArray;
    this.numObjs--;
    console.log("this.numObjs",self.numObjs);

    return [temp,true];
  }

};

// StackObject.prototype.returnObjIndex = function(objIndex){
//
//   var temp = "";
//   var self = this;
//
//   this.stackArray.forEach(function(elementObj){
//
//     if(elementObj.index !== objIndex)
//     {
//       temp = elementObj.obj;
//     }
//   });
//
//   return temp;
//
// };

//////////////////////////jquery///////////////////////////////////////////

var stackObjectDoc;
var addObjectDoc="";

$(document).ready(function(){

  stackObjectDoc = new StackObject();
  generateStackBoardHtml();
  stackBoard(addObjectDoc, stackObjectDoc);


});

function generateStackBoardHtml(stackObject){
  var generateParent = "<div class='col-md-4'><div id='stack-board'><div class='row'><div class='col-md-2 col-md-offset-2'><h1>Stack</h1></div></div></div></div></div>";

  $('#board .row').append(generateParent);

  var generateContent ="<div class='row'><div class='col-md-2 col-md-offset-2'><div id='stack-overflow' class='extra'><h3>Overflow</h3></div></div></div>";

  $('#stack-board').append(generateContent);

  for(var i=stackObject.stackLength-1; i>=0 ; i++)
  {
    generateContent = "" ;
    $('#stack-board').append(generateContent);
  }

  generateContent ="<div class='row'><div class='col-md-2 col-md-offset-2'><div id='stack-underflow' class='extra'><h3>Underflow</h3></div></div></div>";

  $('#stack-board').append(generateContent);




}

function stackBoard(addObjectDoc, stackObject){

  $('#stack_board .extra').css('display','none');

  $('#stack_board').on('click', '.btn', function(){

      var tempId = $(this).attr('id');

      if(tempId === "take-object")
      {
        console.log("take");
        var tempObj = stackObject.popObj();
        console.log("take performed");
        console.log(tempObj);

        if(tempObj[1]===true)
        {
          var temp = "#stack_board #card"+(tempObj[0].index).toString();
          $(temp).css('display','block');
          temp = temp + "-reversed";
          $(temp).css('display','none');
          $('#stack_board #overflow').css('display','none');
        }
        else if(tempObj[1]===false)
        {
          $('#stack_board #underflow').css('display','block');
        }

      }
      else if(tempId === "add-object")
      {
        console.log("add");
        console.log(addObject);

        if(addObject!=="")
        {
          var tempObj2 = stackObject.pushObj(addObject);
          console.log("add performed");
          console.log(tempObj2);

          if(tempObj2[1]===true)
          {
            var temp2 = "#stack_board #card"+(tempObj2[0].index).toString();
            $(temp2).css('display','none');
            temp2 = temp2 + "-reversed";
            $(temp2).css('display','block');
            temp2 = temp2 + " h3";
            console.log(temp2);
            $(temp2).html(addObject);
            $('#stack_board #underflow').css('display','none');
          }
          else if(tempObj2[1]===false)
          {
            $('#stack_board #overflow').css('display','block');
          }
        }
      }
  });

  $('#stack_board .input-object').on( 'change', 'input', function(){
      addObject = $(this).val();
      console.log(addObject);
  });

  for(var i=0; i<stackObject.stackLength; i++)
  {
    var temp = "#stack_board #card"+(i).toString();
    temp = temp + "-reversed";
    $(temp).css('display','none');
  }

}
