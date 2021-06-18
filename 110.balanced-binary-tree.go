/*
 * @lc app=leetcode id=110 lang=golang
 *
 * [110] Balanced Binary Tree
 */

package leetcode

// @lc code=start
func isBalanced(root *TreeNode) bool {
	return helper110(root) >= 0
}

func helper110(node *TreeNode) int {
	if node == nil {
		return 0
	}
	lh, rh := helper110(node.Left), helper110(node.Right)
	if lh < 0 || rh < 0 || lh-rh > 1 || lh-rh < -1 {
		return -1
	}
	if lh > rh {
		return 1 + lh
	}
	return 1 + rh
}

// @lc code=end
