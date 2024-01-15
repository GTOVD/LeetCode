/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function postorderTraversal(root: TreeNode | null): number[] {
    // return recursiveSolution(root);
    
    return recursive2Solution(root);

    // return iterativeSolution(root);
};

const recursiveSolution = (root) => {
    if(!root) return [] 

    let left = recursiveSolution(root.left)
    let right = recursiveSolution(root.right)

    return [...left, ...right, root.val]
}

const recursive2Solution = (root, result = []) => {
    if(!root) return [] 

    recursive2Solution(root.left, result)
    recursive2Solution(root.right, result)

    result.push(root.val)

    return result
}

const iterativeSolution = (root) => {
    const result = [];
    const stack = [root];

    while (stack.length) {
        const node = stack.pop()

        if(node) {
            result.push(node.val);

            stack.push(node.left, node.right);
        }
    }

    return result.reverse()
}

