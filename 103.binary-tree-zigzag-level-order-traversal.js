/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const q = [root];
  while (q.length) {
    const level = [];
    const len = q.length;
    for (let i = 0; i < len; ++i) {
      const node = q.shift();
      level.push(node.val);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    if (res.length % 2) {
      level.reverse();
    }
    res.push(level);
  }
  return res;
};
// @lc code=end
