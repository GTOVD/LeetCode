/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 
var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1


//   if(!root) return 0;
//   let queue = [root]
//   let result = queue
//   let depth = 0;
//   while(result) {
//     queue = result
//     result = queue.forEach(_=>{
//       let result2 = queue.shift();
//       if(result2.left) queue.push(result2.left);
//       if(result2.right) queue.push(result2.right);
//       console.log(queue)
//       return result2
//     })
//     // for(let i = 0; i < queueSize; i++){
//     //   let result = queue.shift();
//     //   if(result.left) queue.push(result.left);
//     //   if(result.right) queue.push(result.right);
//     //   console.log({result, queue})
//     // }
//     depth++
//   }
//   return depth


    // if (!root) return 0;
    // const queue = [root];
    // let depth = 0;
    // while (queue.length !== 0) {
    //     console.log(depth)
    //     depth++;
    //     const len = queue.length;
    //     for (let i = 0; i < queue.length; i++) {
    //         if (queue[i].left) queue.push(queue[i].left);
    //         if (queue[i].right) queue.push(queue[i].right);
    //     }
    //     console.log(queue)
    //     queue.splice(0, len);
    //     console.log(queue)
    // }
    // return depth;

    // while(queue) {
    //   result.shift(queue)
    //   queue.pop()
    // }


    // if(!root) return 0
    // let left = maxDepth(root.left)
    // let right = maxDepth(root.right)
    // return Math.max(left, right)+1


    // let topRoot = root
    // let resultLeft = []
    // let resultRight = []

    // const DFSLeft = (root) => {
    //   if(!root) return
    //   resultLeft.push(root.val)
    //   DFSLeft(root.left)
    // }
    // DFSLeft(root)

    // const DFSRight = (root) => {
    //   if(!root) return
    //   resultRight.push(root.val)
    //   DFSRight(root.right)
    // }
    // DFSRight(root)

    // console.log(resultLeft)
    // console.log(resultRight)

    // return Math.max(resultLeft.length, resultRight.length)
};