/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let num1 = '';
    let num2 = '';
    while (l1 || l2) {
        if (l1) {
            num1 = l1.val + num1;
            l1 = l1.next;
        }
        if (l2) {
            num2 = l2.val + num2;
            l2 = l2.next;
        }
    }
    let outNumberString = (parseInt(num1) + parseInt(num2)).toString().split('').reverse().join('');

    return fromArraytoLinkedList(Array.from(String(outNumberString), Number));
};

function fromArraytoLinkedList(a) {
    let node, temp;
    for (let i = a.length - 1; i >= 0; i--) {
        if (!node)
            node = new ListNode(a[i]);
        else {
            temp = new ListNode(a[i]);
            temp.next = node;
            node = temp;
        }
    }
    return node;
}

console.log(addTwoNumbers([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],[5, 6, 4]));