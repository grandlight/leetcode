/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const helper = (cur, node, target) => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right && node.val === target) {
      res.push([...cur, node.val]);
    }
    cur.push(node.val);
    helper(cur, node.left, target - node.val);
    helper(cur, node.right, target - node.val);
    cur.pop();
  };
  const res = [];
  helper([], root, sum);
  return res;
};
// @lc code=end
