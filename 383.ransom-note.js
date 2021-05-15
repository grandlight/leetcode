/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const lookup = {};
  for (const c of magazine) {
    lookup[c] ? ++lookup[c] : (lookup[c] = 1);
  }
  for (const c of ransomNote) {
    if (!lookup[c]) {
      return false;
    }
    --lookup[c];
  }
  return true;
};
// @lc code=end
