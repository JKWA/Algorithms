class BinarySearchTree {
    constructor() {
      this.head = null;
    }

    getNode(data) {
        return {
            data,
            left: null,
            right: null,
        };
    }

    add(data) {
        if (this.head === null) {
            this.head = this.getNode(data);
        } else {
            this.head = this._insert(this.head, data);
        }
          return (this);
    }
    
    _insert(node, data) {
        const currentNode = node;
            if (currentNode.data > data) {
                if (currentNode.left === null) {
                  currentNode.left = this.getNode(data);
                } else {
                  this._insert(currentNode.left, data);
                }

            } else if (currentNode.right === null) {
                currentNode.right = this.getNode(data);
            } else {
                this._insert(currentNode.right, data);
            }
            
          return currentNode;
      }

      contains (value) {
        let doesContain = false;

        if(this.head === value){
            return true;
        }

        function  recursiveSearch (node){
            if(node){
                if(node.data === value){
                    doesContain = true
                }else if (node.left !== undefined && value < node.data) {
                    recursiveSearch(node.left, value)

                }else if (node.right !== undefined && value > node.data) {
                    recursiveSearch(node.right, value)
                }
            }
        }

        recursiveSearch(this.head, value);

        return doesContain;
    }
 

    depthFirstLog (callback) {

        function recurse(tree) {
            callback(tree.data);
      
            if (tree.left) {
                recurse(tree.left);
            }
        
            if (tree.right) {
                recurse(tree.right);
            }
        }
      
        recurse(this.head);
    }

    getMinValue (){
        let minValue

        function recursiveMinValue(node){
            if(!node.left){
                minValue = node.data;
                return node.data
            }else{
                recursiveMinValue(node.left)
            }
        }
        
        recursiveMinValue(this.head)
   
        return minValue;
    }

   

    getMaxValue (){
        let maxValue

        function recursiveMaxValue(node){
            if(!node.right){
                maxValue = node.data;
            }else{
                recursiveMaxValue(node.right)
            }
        }
        recursiveMaxValue(this.head)
   
        return maxValue;
    }
       
  }
  
  module.exports = BinarySearchTree;