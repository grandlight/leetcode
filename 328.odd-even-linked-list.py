#
# @lc app=leetcode id=328 lang=python3
#
# [328] Odd Even Linked List
#

# Time:  O(n)
# Space: O(1)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
class Solution:
    def oddEvenList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        even_head = head.next
        odd, even = head, head.next
        while even and even.next:
            odd.next = even.next
            odd = odd.next
            even.next = odd.next
            even = even.next
        odd.next = even_head
        return head


# @lc code=end
