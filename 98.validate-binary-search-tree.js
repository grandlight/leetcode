/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
var isValidBST = function (root) {
  const helper = (node, mn, mx) => {
    if (!node) {
      return true;
    }
    const a = mn < node.val && node.val < mx;
    const b = helper(node.left, mn, node.val);
    const c = helper(node.right, node.val, mx);
    return a && b && c;
  };
  return helper(root, -Infinity, Infinity);
};
// @lc code=end
