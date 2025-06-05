// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Examples:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Input: head = [], val = 1
// Output: []

// Input: head = [7,7,7,7], val = 7
// Output: []
 
// Constraints:
// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let list = new ListNode(0);
    list.next = head;
    let current = list;

    while (current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return list.next;
};
// Time Complexity: O(n)
// Space Complexity: O(1)

// With recursion:
var removeElements = function(head, val) {
    if (head === null) {
        return null;
    }
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
};
// Time Complexity: O(n)
// Space Complexity: O(n)
