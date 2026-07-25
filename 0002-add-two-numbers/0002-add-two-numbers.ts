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
    if(l1 == null) return l2;

    if(l2 == null) return l1;

    let dummy = new ListNode(0);
    let fake = dummy;

    let carry = 0;

    while(l1 != null || l2 !=null || carry != 0){
        let sum = (l1 != null ? l1.val : 0) +(l2 != null ? l2.val : 0) + carry;
        carry = Math.floor(sum/10);
        sum = (sum%10);
        fake.next = new ListNode(sum);
        fake = fake.next;
        l1 = (l1!=null) ? l1.next :null;
        l2 = (l2!=null) ? l2.next :null;
    }
    return dummy.next;
};