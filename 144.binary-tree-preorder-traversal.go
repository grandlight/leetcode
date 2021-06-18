/*
 * @lc app=leetcode id=144 lang=golang
 *
 * [144] Binary Tree Preorder Traversal
 */

package leetcode

// @lc code=start
func preorderTraversal(root *TreeNode) []int {
	res := make([]int, 0)
	helper144(root, &res)
	return res
}

func helper144(node *TreeNode, res *[]int) {
	if node != nil {
		*res = append(*res, node.Val)
		helper144(node.Left, res)
		helper144(node.Right, res)
	}
}

// @lc code=end
