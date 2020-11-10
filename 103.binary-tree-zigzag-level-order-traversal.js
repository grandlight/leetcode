/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  let left2right = true;

  while (queue.length > 0) {
    let len = queue.length;
    let currentLevel = [];
    while (len--) {
      let node = queue.shift();
      currentLevel.push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    result.push(left2right ? currentLevel : currentLevel.reverse());
    left2right = !left2right;
  }
  return result;
};
// @lc code=end
