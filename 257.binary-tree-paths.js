/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let helper = (root, path) => {
    if (!root) return;
    path.push(root.val);
    if (!root.left && !root.right) {
      paths.push(path.join("->"));
    }
    helper(root.left, [...path]);
    helper(root.right, [...path]);
  };
  let paths = [];
  helper(root, []);
  return paths;
};
// @lc code=end
