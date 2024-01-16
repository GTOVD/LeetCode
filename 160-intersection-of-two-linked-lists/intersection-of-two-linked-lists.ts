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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    return iterative(headA, headB);


    if(!headA || !headB) return null;

    // if(headA < headB) return getIntersectionNode(headB, headA);
    // console.log(headA, headB)

    // return (headA === headB) ? headA : getIntersectionNode(headA.next, headB.next);
};

const iterative = (headA, headB) => {
    if(!headA || !headB) return null;
    let a = headA
    while(headB) {
        while(headA) {
            if(headA === headB) return headA
            headA = headA.next
        }
        headA = a
        headB = headB.next
    }
    return null
}