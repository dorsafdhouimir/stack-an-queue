class Queue {
  constructor(){this.data=[]}

  IsEmpty(){
    return this.data.length==0 ? true:false
  }

  Enqueue(element){
    this.data.push(element)
  }
  Dequeue(){

    if(this.data.length!=0) {
    var msg = this.data[0] + " was deleted from the Queue"
    this.data.shift()
    return msg }
    else return null
  }
  Peek(){
    if(this.data.length!=0) {
      var msg = this.data[0] + " is the first element of the Queue"
      return msg }
      else return null
  }

  Size(){
    return this.data.length
  }

}

const Q1 = new Queue()
Q1.Enqueue("habil");
Q1.Enqueue("dorsaf");
//-------------------------- Stack class 
class Stack{
  constructor(){
    this.data=[]
  }
  add(element){
    this.data.push(element)
  }
  Remove(){
    this.data.pop()
  }
  Size(){
    return this.data.length
  }
  Peek_check(){
    return this.data[this.data.length-1]
  }

}

const ST1= new Stack()
ST1.add("iyed")
ST1.add("bechir")
ST1.add("ahmed")

ST1.Size() 
ST1.Peek_check() 