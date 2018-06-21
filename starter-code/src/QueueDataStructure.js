function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE=8;
    }

QueueDataStructure.prototype.isEmpty=function(){
        if (this.queueControl.length == 0){
            return true;
        } 
        return false;
    }
// QueueDataStructure.prototype.push=function(){
//         if (this.MAX_SIZE = 0 <= 7){
//             return true;
//         }
//         return false;
//     }
    
// QueueDataStructure.prototype.pop=function(){
//         if (this.MAX_SIZE = 0 <= 8){
//             return true;
//         } else if (this.MAX_SIZE == 8) {
//             return false;
//         } else {
//             return false;
//         }
        
//     }