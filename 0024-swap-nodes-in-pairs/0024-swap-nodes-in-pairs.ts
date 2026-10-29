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

function swapPairs(head: ListNode | null): ListNode | null {
    if(head == null || head.next == null) return head;

    let curr = head;
    let next = head.next;
    let nextPointer = next.next;

    next.next = curr;
    curr.next = swapPairs(nextPointer);
    
    return next;

};