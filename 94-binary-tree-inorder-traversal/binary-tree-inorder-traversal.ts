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

function inorderTraversal(root: TreeNode | null): number[] {
    if(!root) return [];
    // return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]

    let stack = []
    let result = []
    let head = root

    while(head || stack.length > 0) {
        while ( head ) {
            console.log({stack,head})
            stack.push(head)
            head = head.left
        }
            console.log({stack,head})
        head = stack.pop()
        result.push(head.val)
        head = head.right
    }
    return result
};