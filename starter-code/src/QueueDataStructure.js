function QueueDataStructure () {
    this.array = [];
}

StackDataStructure.prototype.pushtoQueue = function (data) {
    var arrayRef = this.array;
    if (arrayRef.length <= 10) {
        arrayRef.push(data);
        return arrayRef;
    } console.log("Queue full!")

}

StackDataStructure.prototype.unqueueFirst = function () {
    var arrayRef = this.array;
    if (arrayRef.length > 0) {
        arrayRef.shift();
        return arrayRef;
    } else console.log("First element removed from queue")

}

var newQueue = new StackDataStructure();

newQueue.pushOnArray(1)


console.log(newQueue.array)

QueueDataStructure.prototype.pushQ = function(num){
    var arrayRef = this.array;
           if (arrayRef.length <= 10) {
               arrayRef.push(num);
               return arrayRef;
               //console.log ("stackoverflow"); 
               //console.log (x);
           } else {
               //console.log (x);
               arrayRef.length = 9;
               console.log("stackoverflow");
           } 
       }
   
   
       QueueDataStructure.prototype.removeQ = function(){
           var arrayRef = this.array;
                  if (arrayRef.length > 0) {
                      arrayRef.shift();
                      return arrayRef;
                      //console.log ("stackoverflow"); 
                      //console.log (x);
                  } else {
                      //console.log (x);
                      console.log("stackunderflow");
                  } 
              }
          
