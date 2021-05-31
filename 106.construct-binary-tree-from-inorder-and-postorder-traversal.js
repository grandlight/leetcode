/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const helper = (p, iLeft, iRight) => {
    if (p < 0 || iLeft > iRight) {
      return null;
    }
    const i = lookup[postorder[p]];
    const root = new TreeNode(inorder[i]);
    root.left = helper(p - iRight + i - 1, iLeft, i - 1);
    root.right = helper(p - 1, i + 1, iRight);
    return root;
  };
  const lookup = {};
  for (let i = 0; i < inorder.length; ++i) {
    lookup[inorder[i]] = i;
  }
  return helper(postorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end
