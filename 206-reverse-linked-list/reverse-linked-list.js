/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(linkedList) {
    let next = null;
    let previous = null;
    
    while(linkedList) {
        next = linkedList.next;
        linkedList.next = previous;
        previous = linkedList;
        linkedList = next
    }

    linkedList = previous;
    return linkedList;
};