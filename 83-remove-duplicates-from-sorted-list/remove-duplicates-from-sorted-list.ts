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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let headNode = head

    while(head) {
        console.log(head)
        if(head.val === head?.next?.val) {
            head.next = head.next.next
            continue
        }
        head = head.next
    }

    return headNode
};