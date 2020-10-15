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
  let visited = new Array(nums.length).fill(false);
  let res = [];

  let dfs = (curr, level) => {
    if (level === nums.length) {
      res.push(curr.slice());
      return;
    }
    for (let i = 0; i < nums.length; ++i) {
      if (visited[i]) continue;
      visited[i] = true;
      curr.push(nums[i]);
      dfs(curr, level + 1);
      curr.pop();
      visited[i] = false;
    }
  };

  dfs([], 0);
  return res;
};
// @lc code=end
