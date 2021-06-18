/*
 * @lc app=leetcode id=234 lang=golang
 *
 * [234] Palindrome Linked List
 */
package leetcode

// @lc code=start
func isPalindrome(head *ListNode) bool {
	slow, fast := head, head
	for fast.Next != nil && fast.Next.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	var prev *ListNode
	curr := slow.Next
	for curr != nil {
		next := curr.Next
		curr.Next = prev
		prev = curr
		curr = next
	}
	curr = prev
	for curr != nil {
		if curr.Val != head.Val {
			return false
		}
		curr = curr.Next
		head = head.Next
	}
	return true
}

// @lc code=end
