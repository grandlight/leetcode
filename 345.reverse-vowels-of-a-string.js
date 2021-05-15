/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const res = s.split("");
  const vowels = "aeiouAEIOU";
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!vowels.includes(res[i])) {
      ++i;
    } else if (!vowels.includes(res[j])) {
      --j;
    } else {
      [res[i], res[j]] = [res[j], res[i]];
      ++i, --j;
    }
  }
  return res.join("");
};
// @lc code=end
