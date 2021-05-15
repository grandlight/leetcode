/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];
  const stk = [[root, false]];
  while (stk.length > 0) {
    const [node, visited] = stk.pop();
    if (!node) {
      continue;
    }
    if (visited) {
      res.push(node.val);
    } else {
      stk.push([node.right, false]);
      stk.push([node.left, false]);
      stk.push([node, true]);
    }
  }
  return res;
};
// @lc code=end
