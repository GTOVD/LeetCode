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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let lsum: ListNode = new ListNode(null);
    let head: ListNode = lsum;
    let carry: number = 0;
    while(l1||l2) {
        let currentValue: number = (l1?.val ? l1.val : 0) + (l2?.val ? l2.val : 0);
        lsum.next = new ListNode(((currentValue+carry)%10));
        carry = ((currentValue+carry)>=10) ? 1 : 0;
        lsum = lsum.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if(carry) lsum.next = new ListNode(carry);
    return head.next;
};