/*
 * @lc app=leetcode id=257 lang=golang
 *
 * [257] Binary Tree Paths
 */

package leetcode

import "strconv"

// @lc code=start
func binaryTreePaths(root *TreeNode) []string {
	res := []string{}
	if root != nil {
		helper257(root, "", &res)
	}
	return res
}

func helper257(node *TreeNode, path string, res *[]string) {
	if node.Left == nil && node.Right == nil {
		*res = append(*res, path+strconv.Itoa(node.Val))
	}
	if node.Left != nil {
		helper257(node.Left, path+strconv.Itoa(node.Val)+"->", res)
	}
	if node.Right != nil {
		helper257(node.Right, path+strconv.Itoa(node.Val)+"->", res)
	}
}

// @lc code=end
