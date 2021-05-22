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
  const helper = (cur, idx) => {
    if (idx === digits.length) {
      res.push(cur.slice());
      return;
    }
    const letters = lookup[digits[idx]];
    for (const letter of letters) {
      helper(cur + letter, idx + 1);
    }
  };
  const lookup = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const res = [];
  helper("", 0);
  return digits.length ? res : [];
};
// @lc code=end
