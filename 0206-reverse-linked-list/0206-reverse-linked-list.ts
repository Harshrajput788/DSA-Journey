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

function reverseList(head: ListNode | null): ListNode | null {
    if(head === null || head.next === null) return head;

    let pointer = head;
    let next = head.next;
    let prev = null;

    while(next!=null){
        pointer.next = prev;
        prev = pointer;
        pointer= next;
        next = next.next;
    }

    pointer.next = prev;

    return pointer;
};