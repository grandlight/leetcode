/*
 * @lc app=leetcode id=145 lang=golang
 *
 * [145] Binary Tree Postorder Traversal
 */

package leetcode

// @lc code=start
func postorderTraversal(root *TreeNode) []int {
	res := make([]int, 0)
	helper145(root, &res)
	return res
}

func helper145(node *TreeNode, res *[]int) {
	if node != nil {
		helper145(node.Left, res)
		helper145(node.Right, res)
		*res = append(*res, node.Val)
	}
}

// @lc code=end
