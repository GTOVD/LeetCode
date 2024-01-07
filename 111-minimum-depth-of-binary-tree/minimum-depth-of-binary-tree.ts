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

function minDepth(root: TreeNode | null): number {
    if(!root) return 0;
    
    let left =  minDepth(root.left) + 1
    let right = minDepth(root.right) + 1

    if(left <= 1) return right
    if(right <= 1) return left

    return Math.min(left, right)
};