/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let visited = new Array(nums.length).fill(false);
  let res = [];
  nums.sort();

  let dfs = (curr, level) => {
    if (level === nums.length) {
      res.push(curr.slice());
      return;
    }
    for (let i = 0; i < nums.length; ++i) {
      if (visited[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;
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
