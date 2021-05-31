/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const helper = (start, end) => {
    if (start > end) {
      return [null];
    }
    const res = [];
    for (let i = start; i < end + 1; ++i) {
      const leftTree = helper(start, i - 1);
      const rightTree = helper(i + 1, end);
      for (const leftNode of leftTree) {
        for (const rightNode of rightTree) {
          const node = new TreeNode(i);
          node.left = leftNode;
          node.right = rightNode;
          res.push(node);
        }
      }
    }
    return res;
  };
  return helper(1, n);
};
// @lc code=end
