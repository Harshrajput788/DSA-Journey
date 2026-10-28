import java.util.*;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public void reorderList(ListNode head) {
        Stack<ListNode>stack = new Stack<>();

        ListNode curr = head;
        ListNode next = head.next;

        while(curr!=null){
            stack.push(curr);
            curr= curr.next;
        }

        curr= head;

        ListNode top = stack.pop();

        while(curr == null || curr.next != null){
            if(next ==  top){
                return;
            }
            curr.next = top;
            top.next = next;
            top = stack.pop();
            top.next= null;
            curr = next;
            next = next.next;
        }

        return;
    }
}