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

function hasPathSum(root: TreeNode | null, targetSum: number, total = 0): boolean {
    if(!root) return false;

    total += root.val

    if(!root.left && !root.right) return total === targetSum;

    return hasPathSum(root.left, targetSum, total) || hasPathSum(root.right, targetSum, total)
};