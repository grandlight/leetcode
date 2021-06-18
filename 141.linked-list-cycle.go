/*
 * @lc app=leetcode id=141 lang=golang
 *
 * [141] Linked List Cycle
 */
package leetcode

// @lc code=start
func hasCycle(head *ListNode) bool {
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
		if slow == fast {
			return true
		}
	}
	return false
}

// @lc code=end
