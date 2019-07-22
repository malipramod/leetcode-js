/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let temp = new ListNode(null);
    temp.next = head;
    let start = temp;

    while(true){
        let counter = 0;
        let tempK = temp;
        while(tempK && counter++<k){
            tempK = tempK.next;
        }

        if (!tempK && counter !== k + 1) break;

        counter=0;
        let a = temp.next;
        while (++counter < k) { 
            let b = a.next;
            a.next = b.next;
            b.next = temp.next;
            temp.next = b;
        }
        temp = a;
    }
    return start.next;
};

function print(n) {
    var t = n;
    var s = '';
    while (t) {
        s = s + t.val + '->';
        t = t.next;
    }
    s += 'null';
    return s;
}

console.log(print(reverseKGroup({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5
                }
            }
        }
    }
}, 3)));

