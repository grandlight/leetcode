/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const helper = (p, iLeft, iRight) => {
    if (p >= preorder.length || iLeft > iRight) {
      return null;
    }
    const i = lookup[preorder[p]];
    const root = new TreeNode(inorder[i]);
    root.left = helper(p + 1, iLeft, i - 1);
    root.right = helper(p + i - iLeft + 1, i + 1, iRight);
    return root;
  };
  const lookup = {};
  for (let i = 0; i < inorder.length; ++i) {
    lookup[inorder[i]] = i;
  }
  return helper(0, 0, inorder.length - 1);
};
// @lc code=end
