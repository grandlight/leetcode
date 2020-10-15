/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let combs = [];

  let dfs = (comb, i) => {
    if (i === digits.length) {
      combs.push(comb);
      return;
    }
    for (let ch of map[digits[i]]) {
      dfs(comb + ch, i + 1);
    }
  };

  dfs("", 0);
  return combs;
};
// @lc code=end
