function StackObject(){
  this.structureLength = 10;
  this.structureArray = [];
  this.numObjs = 0;
}

StackObject.prototype._overFlow = function(){

  if(this.numObjs>=this.structureLength)
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
    this.structureArray.push(elementObj);

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

    this.structureArray.forEach(function(elementObj){

      if(elementObj.index !== self.numObjs-1)
      {
        tempArray.push(elementObj);
      }
      else {

        temp = elementObj;
        console.log("elementObj.index",elementObj.index);
      }
    });

    this.structureArray = tempArray;
    this.numObjs--;
    console.log("this.numObjs",self.numObjs);

    return [temp,true];
  }

};


//////////////////////////jquery///////////////////////////////////////////

var stackObjectDoc;
var addObjectDocStack="";

$(document).ready(function(){

  stackObjectDoc = new StackObject();
  generateBoardHtml(stackObjectDoc,"stack");
  stackBoard(addObjectDocStack, stackObjectDoc);


});

function generateBoardHtml(structureObject, string){
  var generateParent = "<div class='col-md-4'><div id='"+string+"-board'><div class='row'><div class='col-md-2 col-md-offset-2'><h1>"+string+"</h1></div></div></div></div></div>";

  $('#board .row:first').append(generateParent);

  var generateContent ="<div class='row'><div class='col-md-2 col-md-offset-2'><div id='"+string+"-overflow' class='extra "+string+"-extra'><h3>Overflow</h3></div></div></div>";

  $('#'+string+'-board').append(generateContent);

  for(var i=structureObject.structureLength-1; i>=0 ; i--)
  {
    generateContent ="<div class='row'><div class='col-md-2 col-md-offset-2'><div id='"+string+"-card"+i+"' class='pic "+string+"-pic'></div><div id='"+string+"-card"+i+"-reversed' class='pic-reversed "+string+"-pic-reversed'><h3></h3></div></div></div>";
    $('#'+string+'-board').append(generateContent);
  }

  generateContent ="<div class='row'><div class='col-md-2 col-md-offset-2'><div id='"+string+"-underflow' class='extra "+string+"-extra'><h3>Underflow</h3></div></div></div>";

  $('#'+string+'-board').append(generateContent);

  generateContent ="<div class='input-object "+string+"-input-object'><div class='row'><div class='col-md-2 col-md-offset-2'><input></input></div></div></div>";

  $('#'+string+'-board').append(generateContent);

  generateContent ="<div class='add-object "+string+"-add-object'><div class='row'><div class='col-md-2 col-md-offset-2'><button class='btn "+string+"-btn' id='"+string+"-add-object'><p>Add</p></button></div></div></div>";

  $('#'+string+'-board').append(generateContent);

  generateContent ="<div class='take-object "+string+"-take-object'><div class='row'><div class='col-md-2 col-md-offset-2'><button class='btn "+string+"-btn' id='"+string+"-take-object'><p>Take</p></button></div></div></div>";

  $('#'+string+'-board').append(generateContent);


}

function stackBoard(addObjectDoc, stackObject){

  $('#stack-board .stack-extra').css('display','none');

  $('#stack-board').on('click', '.stack-btn', function(){

      var tempId = $(this).attr('id');

      if(tempId === "stack-take-object")
      {
        console.log("take");
        var tempObj = stackObject.popObj();
        console.log("take performed");
        console.log(tempObj);

        if(tempObj[1]===true)
        {
          var temp = "#stack-board #stack-card"+(tempObj[0].index).toString();
          $(temp).css('display','block');
          temp = temp + "-reversed";
          $(temp).css('display','none');
          $('#stack-board #stack-overflow').css('display','none');
        }
        else if(tempObj[1]===false)
        {
          $('#stack-board #stack-underflow').css('display','block');
        }

      }
      else if(tempId === "stack-add-object")
      {
        console.log("add");
        console.log(addObjectDoc);

        if(addObjectDoc!=="")
        {
          var tempObj = stackObject.pushObj(addObjectDoc);
          console.log("add performed");
          console.log(tempObj);

          if(tempObj[1]===true)
          {
            var temp = "#stack-board #stack-card"+(tempObj[0].index).toString();
            $(temp).css('display','none');
            temp = temp + "-reversed";
            $(temp).css('display','block');
            temp = temp + " h3";
            console.log(temp);
            $(temp).html(addObjectDoc);
            $('#stack-board #stack-underflow').css('display','none');
          }
          else if(tempObj[1]===false)
          {
            $('#stack-board #stack-overflow').css('display','block');
          }
        }
      }
  });

  $('#stack-board .stack-input-object').on( 'change', 'input', function(){
      addObjectDoc = $(this).val();
      console.log(addObjectDoc);
  });

  for(var i=0; i<stackObject.structureLength; i++)
  {
    var temp = "#stack-board #stack-card"+(i).toString();
    temp = temp + "-reversed";
    $(temp).css('display','none');
  }

}
