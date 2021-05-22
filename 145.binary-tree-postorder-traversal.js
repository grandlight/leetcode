/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function (root) {
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
      stk.push([node, true]);
      stk.push([node.right, false]);
      stk.push([node.left, false]);
    }
  }
  return res;
};
// @lc code=end
