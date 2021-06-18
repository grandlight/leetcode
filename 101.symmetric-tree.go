/*
 * @lc app=leetcode id=101 lang=golang
 *
 * [101] Symmetric Tree
 */

package leetcode

// @lc code=start
func isSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}
	return helper101(root.Left, root.Right)
}

func helper101(p *TreeNode, q *TreeNode) bool {
	if p == nil && q == nil {
		return true
	}
	if (p != nil) != (q != nil) || p.Val != q.Val {
		return false
	}
	return helper101(p.Left, q.Right) && helper101(p.Right, q.Left)
}

// @lc code=end
