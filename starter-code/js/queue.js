function QueueObject(){
  this.structureLength = 10;
  this.structureArray = [];
  this.numObjs = 0;
}

QueueObject.prototype._overFlow = function(){

  if(this.numObjs>=this.structureLength)
  {
    return true;
  }
  else
  {
    return false;
  }

};


QueueObject.prototype._underFlow = function(){

  if(this.numObjs===0)
  {
    return true;
  }
  else
  {
    return false;
  }

};

QueueObject.prototype.enqueueObj = function(element){

  if(this._overFlow())
  {
    return ["null",false];
  }
  else
  {
    var elementObj = {obj: element , index: this.numObjs };
    this.numObjs++;
    this.structureArray.push(elementObj);

    return [elementObj,true];
  }

};

QueueObject.prototype.unqueueObj = function(){

  if(this._underFlow())
  {
    return ["null",false];
  }
  else
  {
    var tempArray = [];
    var temp = "";
    var self = this;
    var min = 0;

    this.structureArray.forEach(function(elementObj){

      if(elementObj.index !== 0)
      {
        elementObj.index--;
        tempArray.push(elementObj);
      }
      else {

        temp = elementObj;

      }
    });

    this.structureArray = tempArray;
    this.numObjs--;

    return [temp,true];
  }
};

QueueObject.prototype.returnByIndex = function(index){
  var temp = "";
  this.structureArray.forEach(function(elementObj){

    if(elementObj.index === index)
    {
      temp = elementObj;
    }
  });

  return temp;

};

/////////////////////////jquery///////////////////////////////////////////

var queueObjectDoc;
var addObjectDocQueue="";

$(document).ready(function(){

  queueObjectDoc = new QueueObject();
  generateBoardHtml(queueObjectDoc,"queue");
  queueBoard(addObjectDocQueue, queueObjectDoc);

});


function queueBoard(addObjectDoc, queueObject){

  $('#queue-board .queue-extra').css('display','none');

  $('#queue-board').on('click', '.queue-btn', function(){

      var tempId = $(this).attr('id');

      if(tempId === "queue-take-object")
      {
        var tempObj = queueObject.unqueueObj();;

        var tempObj2="";

        if(tempObj[1]===true)
        {
          for(var i = 0; i< queueObject.numObjs; i++)
          {
            tempObj2 = queueObject.returnByIndex(i);
            var temp = "#queue-card"+i;
            temp = temp + "-reversed";
            temp = temp + " h3";
            $(temp).html(tempObj2.obj);
          }

          for(var i= queueObject.structureLength-1; i>=queueObject.numObjs;i--)
          {
            var temp = "#queue-card"+i;
            $(temp).css('display','block');
            temp = temp + "-reversed";
            $(temp).css('display','none');

          }

          $('#queue-overflow').css('display','none');
          $('#queue-out-object h3').html(tempObj[0].obj);
        }
        else if(tempObj[1]===false)
        {
          $('#queue-underflow').css('display','block');
          $('#queue-out-object h3').html("");
        }

      }
      else if(tempId === "queue-add-object")
      {

        $('#queue-out-object h3').html("");

        if(addObjectDoc!=="")
        {
          var tempObj = queueObject.enqueueObj(addObjectDoc);

          if(tempObj[1]===true)
          {
            var temp = "#queue-card"+(tempObj[0].index).toString();
            $(temp).css('display','none');
            temp = temp + "-reversed";
            $(temp).css('display','block');
            temp = temp + " h3";
            $(temp).html(addObjectDoc);
            $('#queue-underflow').css('display','none');
          }
          else if(tempObj[1]===false)
          {
            $('#queue-overflow').css('display','block');
          }
        }
      }
  });

  $('#queue-board .queue-input-object').on( 'change', 'input', function(){
      addObjectDoc = $(this).val();
  });

  for(var i=0; i<queueObject.structureLength; i++)
  {
    var temp = "#queue-card"+(i).toString();
    temp = temp + "-reversed";
    $(temp).css('display','none');
  }

}
