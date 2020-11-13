/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let height = (root) => {
    if (!root) return 0;
    let lh = height(root.left);
    if (lh === -1) return -1;
    let rh = height(root.right);
    if (rh === -1) return -1;
    if (Math.abs(lh - rh) > 1) return -1;
    return Math.max(lh, rh) + 1;
  };
  return height(root) !== -1;
};
// @lc code=end
