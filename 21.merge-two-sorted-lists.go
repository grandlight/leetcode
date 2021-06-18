/*
 * @lc app=leetcode id=21 lang=golang
 *
 * [21] Merge Two Sorted Lists
 */

package leetcode

// @lc code=start
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	dummy := ListNode{Val: -1}
	curr := &dummy
	for l1 != nil && l2 != nil {
		if l1.Val < l2.Val {
			curr.Next = l1
			l1 = l1.Next
		} else {
			curr.Next = l2
			l2 = l2.Next
		}
		curr = curr.Next
	}
	if l1 != nil {
		curr.Next = l1
	} else if l2 != nil {
		curr.Next = l2
	}
	return dummy.Next
}

// @lc code=end
