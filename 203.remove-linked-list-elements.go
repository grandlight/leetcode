/*
 * @lc app=leetcode id=203 lang=golang
 *
 * [203] Remove Linked List Elements
 */

package leetcode

// @lc code=start
func removeElements(head *ListNode, val int) *ListNode {
	dummy := &ListNode{Val: -1, Next: head}
	prev, curr := dummy, dummy.Next
	for curr != nil {
		if curr.Val == val {
			prev.Next = curr.Next
		} else {
			prev = curr
		}
		curr = curr.Next
	}
	return dummy.Next
}

// @lc code=end
