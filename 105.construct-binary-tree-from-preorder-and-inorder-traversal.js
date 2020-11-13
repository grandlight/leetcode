/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let build = (pLeft, pRight, iLeft, iRight) => {
    if (pLeft > pRight || iLeft > iRight) return null;

    let i = 0;
    for (i = iLeft; i <= iRight; ++i) {
      if (preorder[pLeft] === inorder[i]) break;
    }

    let root = new TreeNode(inorder[i]);
    root.left = build(pLeft + 1, pLeft + i - iLeft, iLeft, i - 1);
    root.right = build(pLeft + i - iLeft + 1, pRight, i + 1, iRight);
    return root;
  };

  return build(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end
