console.log('Hello NodeJS !');
// LinkedList implementation
//#region class MyNode
class MyNode {
  data;
  next;
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
  toString() {
    console.log(`[MyNode] toString: ${this.data}`);
  }
}
//#endregion
//#region class MyLinkedList
class MyLinkedList {
  nodesList;
  constructor(nodesList) {
    this.nodesList = this.makeNodesList(nodesList);
  }
}
MyLinkedList.prototype.toString = function() { console.log(this); }
MyLinkedList.prototype.displayNodes = function() {
  let msg = `MyLinkedList [${this.nodesList.length}] {`;
  console.log(`${msg}`);
  if (this.nodesList.length > 0) {
    console.log(this.nodesList);
  }
  console.log('}');
}
MyLinkedList.prototype.makeNodesList = function(dataList) {
    let nodesList = [];
    if (!dataList || dataList.length === 0) {
      return nodesList;
    } 
    // if (!dataList) {
    //   let msg = `[MyLinkedList] makeNodesList: parameter 'dataList' should be an array, but instead recieved ${dataList}`;
    //   throw new TypeError(msg);
    // }
    if (dataList.length === 1) {
      nodesList = [new MyNode(dataList[0], null)];
    } 
    else {
      for (let index = dataList.length - 1; index >= 0; index--) {
        if (index === dataList.length - 1) {
          const data = dataList[index];
          let newNode = new MyNode(data, null);
          nodesList[index] = newNode;
        } else {
          const data = dataList[index];
          let node = new MyNode(data, nodesList[index + 1]);
          nodesList[index] = node;
        }
      }
    }
    return nodesList;
}
MyLinkedList.prototype.addNode = function(nodesToAdd) {
  // with some programming lg (like Java, eg), make a new array of nodesList.length + nodesToAdd.length (or, if limit attained : a new small array double the length)
  let newNodesList = this.nodesList.concat(this.makeNodesList(nodesToAdd)); 
  if (this.nodesList.length > 0) {
    // link last node of previous list to head node of new list
    this.nodesList[this.nodesList.length - 1].next = newNodesList[this.nodesList.length];
  }
  this.nodesList = newNodesList;
}
//#endregion

// const myFavouriteCharacters = new MyLinkedList();
const myFavouriteCharacters = new MyLinkedList(['rukia', 'renji', 'soifon', 'toshiro', 'ichigo']);
myFavouriteCharacters.addNode(['edward', 'alphonse', 'winri']);
// myFavouriteCharacters.addNode();
// myFavouriteCharacters.addNode([]);

myFavouriteCharacters.addNode(['juvia', 'erza']);

myFavouriteCharacters.displayNodes();

// console.log(myFavouriteCharacters);
