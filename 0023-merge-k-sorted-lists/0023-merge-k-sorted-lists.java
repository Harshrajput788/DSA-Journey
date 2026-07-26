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

    private List values(ListNode list){
        List<Integer>al = new ArrayList<>();

        while(list != null){
            al.add(list.val);
            list = list.next;
        }

        return al;
    }

    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<Integer>pq = new PriorityQueue<>();

        if(lists.length == 0) return null;

        for(int i = 0;i<lists.length;i++){
            pq.addAll(values(lists[i]));
        }

        ListNode result = new ListNode(0);

        ListNode dummy= result;

        while(!pq.isEmpty()){
            ListNode newNode =  new ListNode(pq.poll());

            dummy.next = newNode;
            dummy=  dummy.next;
        }

        return result.next;
        
    }
}