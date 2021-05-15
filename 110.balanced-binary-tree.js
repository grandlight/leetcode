/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const helper = (node) => {
    if (!node) {
      return 0;
    }
    const lh = helper(node.left);
    const rh = helper(node.right);
    if (lh < 0 || rh < 0 || Math.abs(lh - rh) > 1) {
      return -1;
    }
    return 1 + Math.max(lh, rh);
  };
  return helper(root) >= 0;
};
// @lc code=end
