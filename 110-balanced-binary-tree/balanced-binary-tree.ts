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

function isBalanced(root: TreeNode | null): boolean {
    if(!root) return true;

    let left = countTree(root.left)
    let right = countTree(root.right)

    if(Math.abs(left-right) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)
};

const countTree = (root) => { 
    if(!root) return 0

    return Math.max(countTree(root.left), countTree(root.right)) + 1
}