const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
   constructor() {
      this.rootTree = null;
   }

   root() {
      return this.rootTree;
   }

   add(data) {
      const addNode = (treeNode, data) => {
         if (treeNode === null) {
            return new Node(data);
         }

         if (treeNode.data === data) {
            return treeNode;
         }

         if (data < treeNode.data) {
            treeNode.left = addNode(treeNode.left, data);
         } else {
            treeNode.right = addNode(treeNode.right, data);
         }

         return treeNode;
      }

      this.rootTree = addNode(this.rootTree, data);
   }

   has(data) {
      const searchNode = (treeNode, data) => {
         if (treeNode === null) {
            return false;
         }

         if (treeNode.data === data) {
            return true;
         }

         if (data < treeNode.data) {
            return searchNode(treeNode.left, data);
         } else {
            return searchNode(treeNode.right, data);
         }
      }

      return searchNode(this.rootTree, data);
   }

   find(data) {
      const findNode = (treeNode, data) => {
         if (treeNode === null) {
            return null;
         }

         if (treeNode.data === null) {
            return null;
         }

         if (treeNode.data === data) {
            return treeNode;
         }

         if (data < treeNode.data) {
            return findNode(treeNode.left, data);
         } else {
            return findNode(treeNode.right, data);
         }
      }

      return findNode(this.rootTree, data);
   }

   remove(data) {
      const removeNode = (treeNode, data) => {
         if (treeNode === null) {
            return false;
         }

         if (data < treeNode.data) {
            treeNode.left = removeNode(treeNode.left, data);
            return treeNode;
         } else if (data > treeNode.data) {
            treeNode.right = removeNode(treeNode.right, data);
            return treeNode;
         } else {
            if (treeNode.left === null && treeNode.right === null) {
               return null;
            }

            if (treeNode.left === null) {
               treeNode = treeNode.right;
               return treeNode;
            }
            if (treeNode.right === null) {
               treeNode = treeNode.left;
               return treeNode;
            }

            let minNodeDataFormRight = treeNode.right;
            while (minNodeDataFormRight.left !== null) {
               minNodeDataFormRight = minNodeDataFormRight.left;
            }

            treeNode.data = minNodeDataFormRight.data;
            treeNode.right = removeNode(treeNode.right, minNodeDataFormRight.data);

            return treeNode;
         }
      }

      this.rootTree = removeNode(this.rootTree, data);
   }

   min() {
      if (this.rootTree === null) {
         return null;
      }

      let minNode = this.rootTree;
      while (minNode.left !== null) {
         minNode = minNode.left;
      }

      return minNode.data;
   }

   max() {
      if (this.rootTree === null) {
         return null;
      }

      let maxNode = this.rootTree;
      while (maxNode.right !== null) {
         maxNode = maxNode.right;
      }

      return maxNode.data;
   }
}

module.exports = {
   BinarySearchTree
};