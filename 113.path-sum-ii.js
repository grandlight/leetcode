/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let res = [];

  let dfs = (curr, node, num) => {
    if (!node) return;
    curr.push(node.val);
    if (num === node.val && !node.left && !node.right) {
      res.push(curr.slice());
    }
    dfs(curr, node.left, num - node.val);
    dfs(curr, node.right, num - node.val);
    curr.pop();
  };

  dfs([], root, sum);
  return res;
};
// @lc code=end
