function QueueObject(){
  this.queueLength = 10;
  this.queueArray = [];
  this.numObjs = 0;
}

QueueObject.prototype._overFlow = function(){

  if(this.numObjs>=this.queueLength)
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
    return false;
  }
  else
  {
    var elementObj = {obj: element , index: this.numObjs };
    console.log("elementObj.index",elementObj.index);
    console.log("this.numObjs",this.numObjs);
    this.numObjs++;
    this.queueArray.push(elementObj);

    return true;
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

    this.queueArray.forEach(function(elementObj){
      console.log("elementObj.index",elementObj.index);
      console.log("this.numObjs-1",self.numObjs-1);
      if(elementObj.index !== 0)
      {
        elementObj.index--;
        tempArray.push(elementObj);
      }
      else {

        temp = elementObj.obj;
      }
    });

    this.queueArray = tempArray;
    this.numObjs--;

    return [temp,true];
  }
};
