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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let fake = dummy;

    while(l1 != null && l2 != null){
        if(l1.val < l2.val) {
            fake.next =l1;
            l1 = l1.next;
        }
        else {
            fake.next = l2;
            l2 = l2.next;
        }
        fake = fake.next;
    }

    if(l1 === null) fake.next = l2;
    if(l2 === null) fake.next = l1;

    return dummy.next;
};