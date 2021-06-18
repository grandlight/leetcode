/*
 * @lc app=leetcode id=160 lang=golang
 *
 * [160] Intersection of Two Linked Lists
 */

package leetcode

// @lc code=start
func getIntersectionNode(headA, headB *ListNode) *ListNode {
	currA, currB := headA, headB
	for currA != currB {
		if currA != nil {
			currA = currA.Next
		} else {
			currA = headB
		}
		if currB != nil {
			currB = currB.Next
		} else {
			currB = headA
		}
	}
	return currA
}

// @lc code=end
