/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) return head;
    let len = 0;
    let tail = head;
    while (tail) {
        tail = tail.next;
        len++;
    }
    if (len === n) {
        return head.next;
    }

    len = len - n - 1;
    tail = head;
    while (len) {
        tail = tail.next;
        len--;
    }
    tail.next = tail.next.next;
    return head;
};