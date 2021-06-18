/*
 * @lc app=leetcode id=235 lang=golang
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

package leetcode

// @lc code=start
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if root.Val > p.Val && root.Val > q.Val {
		return lowestCommonAncestor(root.Left, p, q)
	}
	if root.Val < p.Val && root.Val < q.Val {
		return lowestCommonAncestor(root.Right, p, q)
	}
	return root
}

// @lc code=end
