// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
// Examples:
// Input: head = [1,1,2]
// Output: [1,2]

// Constraints:
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;

    while (current && current.next) {
        if(current.val === current.next.val){
            current.next = current.next.next
        }else{
            current = current.next
        }
    }
    return head;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
