/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const helper = (node) => {
    if (!node) {
      return [0, 0];
    }
    const left = helper(node.left);
    const right = helper(node.right);
    return [
      node.val + left[1] + right[1],
      Math.max(...left) + Math.max(...right),
    ];
  };
  return Math.max(...helper(root));
};
// @lc code=end
