/*
 * @lc app=leetcode id=108 lang=golang
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

package leetcode

// @lc code=start
func sortedArrayToBST(nums []int) *TreeNode {
	return helper108(nums, 0, len(nums)-1)
}

func helper108(nums []int, left int, right int) *TreeNode {
	if left > right {
		return nil
	}
	mid := left + (right-left)/2
	node := &TreeNode{Val: nums[mid]}
	node.Left = helper108(nums, left, mid-1)
	node.Right = helper108(nums, mid+1, right)
	return node
}

// @lc code=end
