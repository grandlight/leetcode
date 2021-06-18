/*
 * @lc app=leetcode id=104 lang=golang
 *
 * [104] Maximum Depth of Binary Tree
 */

package leetcode

// @lc code=start
func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return 1 + max104(maxDepth(root.Left), maxDepth(root.Right))
}

func max104(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// @lc code=end
