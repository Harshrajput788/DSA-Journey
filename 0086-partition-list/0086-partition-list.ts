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

function partition(head: ListNode | null, x: number): ListNode | null {
    let small = new ListNode(0);
    let greate = new ListNode(0);
    let curr =head;
    let fake1 = small;
    let fake2 = greate;

    while(curr!=null){
        if(x > curr.val){
            fake1.next = curr;
            fake1 = fake1.next;
            curr=curr.next;
            fake1.next=null;
        }else{
            fake2.next = curr;
            fake2 = fake2.next;
            curr=curr.next;
            fake2.next=null;
        }
    }

    fake1.next = greate.next;

    return small.next;
};