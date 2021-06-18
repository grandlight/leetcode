/*
 * @lc app=leetcode id=100 lang=golang
 *
 * [100] Same Tree
 */

package leetcode

// @lc code=start
func isSameTree(p *TreeNode, q *TreeNode) bool {
	if p == nil && q == nil {
		return true
	}
	if (p != nil) != (q != nil) || p.Val != q.Val {
		return false
	}
	return isSameTree(p.Left, q.Left) && isSameTree(p.Right, q.Right)
}

// @lc code=end
