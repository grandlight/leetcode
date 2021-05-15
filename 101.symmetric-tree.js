/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  const helper = (p, q) => {
    if (!p && !q) {
      return true;
    }
    if ((p && !q) || (!p && q) || p.val !== q.val) {
      return false;
    }
    return helper(p.left, q.right) && helper(p.right, q.left);
  };
  return helper(root.left, root.right);
};
// @lc code=end
