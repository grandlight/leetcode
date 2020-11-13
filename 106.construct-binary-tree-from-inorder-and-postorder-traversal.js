/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let build = (iLeft, iRight, pLeft, pRight) => {
    if (iLeft > iRight || pLeft > pRight) return null;

    let i = 0;
    for (i = iLeft; i <= iRight; ++i) {
      if (inorder[i] === postorder[pRight]) break;
    }

    let root = new TreeNode(inorder[i]);
    root.left = build(iLeft, i - 1, pLeft, pLeft + i - iLeft - 1);
    root.right = build(i + 1, iRight, pLeft + i - iLeft, pRight - 1);
    return root;
  };

  return build(0, inorder.length - 1, 0, postorder.length - 1);
};
// @lc code=end
