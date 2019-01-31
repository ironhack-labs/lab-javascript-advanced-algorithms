
  let maxStack = 3;

class Stack {


  constructor() {
    this.array = []
  }

  pop(index){
        this.array.push(item)
  }
  add(item){
    if(this.stackLen() < maxStack){
      this.array.push(item)
    }else{
      console.log('Exceeded stack length')
    }
  }
  stackLen(){
    return this.array.length
  }
  display(){
    console.log(this.array);
  }

}


let arr = new Stack

arr.add(2)
arr.add(3)
arr.add(4)
arr.display()
// console.log(arr.stackLen())
