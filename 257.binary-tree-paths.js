/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const helper = (curr, node) => {
    if (!node.left && !node.right) {
      res.push(`${curr}${node.val}`);
      return;
    }
    if (node.left) {
      helper(`${curr}${node.val}->`, node.left);
    }
    if (node.right) {
      helper(`${curr}${node.val}->`, node.right);
    }
  };
  const res = [];
  helper("", root);
  return res;
};
// @lc code=end
