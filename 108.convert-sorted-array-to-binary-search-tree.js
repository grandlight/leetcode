/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const helper = (left, right) => {
    if (left > right) {
      return null;
    }
    const mid = left + Math.trunc((right - left) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = helper(left, mid - 1);
    node.right = helper(mid + 1, right);
    return node;
  };
  return helper(0, nums.length - 1);
};
// @lc code=end
