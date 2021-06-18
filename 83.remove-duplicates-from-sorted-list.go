/*
 * @lc app=leetcode id=83 lang=golang
 *
 * [83] Remove Duplicates from Sorted List
 */

package leetcode

// @lc code=start
func deleteDuplicates(head *ListNode) *ListNode {
	curr := head
	for curr != nil && curr.Next != nil {
		if curr.Val == curr.Next.Val {
			curr.Next = curr.Next.Next
		} else {
			curr = curr.Next
		}
	}
	return head
}

// @lc code=end
