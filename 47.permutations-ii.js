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
  const helper = (cur, idx) => {
    if (idx === nums.length) {
      res.push(cur.slice());
      return;
    }
    for (let i = 0; i < nums.length; ++i) {
      if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) {
        continue;
      }
      if (!visited[i]) {
        visited[i] = true;
        cur.push(nums[i]);
        helper(cur, idx + 1);
        cur.pop();
        visited[i] = false;
      }
    }
  };
  nums.sort();
  const res = [];
  const visited = new Array(nums.length).fill(false);
  helper([], 0);
  return res;
};
// @lc code=end
