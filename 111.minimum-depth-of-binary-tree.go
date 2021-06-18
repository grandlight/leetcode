/*
 * @lc app=leetcode id=111 lang=golang
 *
 * [111] Minimum Depth of Binary Tree
 */

package leetcode

// @lc code=start
func minDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	if root.Left == nil {
		return 1 + minDepth(root.Right)
	}
	if root.Right == nil {
		return 1 + minDepth(root.Left)
	}
	return min111(minDepth(root.Left), minDepth(root.Right)) + 1
}

func min111(a, b int) int {
	if a < b {
		return a
	}
	return b
}

// @lc code=end
