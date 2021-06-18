/*
 * @lc app=leetcode id=94 lang=golang
 *
 * [94] Binary Tree Inorder Traversal
 */

package leetcode

// @lc code=start
func inorderTraversal(root *TreeNode) []int {
	res := make([]int, 0)
	helper94(root, &res)
	return res
}

func helper94(node *TreeNode, res *[]int) {
	if node != nil {
		helper94(node.Left, res)
		*res = append(*res, node.Val)
		helper94(node.Right, res)
	}
}

// @lc code=end
