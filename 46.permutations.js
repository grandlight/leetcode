/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const helper = (cur, idx) => {
    if (idx === nums.length) {
      res.push(cur.slice());
      return;
    }
    for (let i = 0; i < nums.length; ++i) {
      if (!visited[i]) {
        visited[i] = true;
        cur.push(nums[i]);
        helper(cur, idx + 1);
        cur.pop();
        visited[i] = false;
      }
    }
  };
  const res = [];
  const visited = new Array(nums.length).fill(false);
  helper([], 0);
  return res;
};
// @lc code=end
