/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const lookup = {};
  for (const s of strs) {
    const sorted = s.split("").sort().join("");
    if (!lookup[sorted]) {
      lookup[sorted] = [];
    }
    lookup[sorted].push(s);
  }
  return Object.values(lookup);
};
// @lc code=end
