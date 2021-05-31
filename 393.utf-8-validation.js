/*
 * @lc app=leetcode id=393 lang=javascript
 *
 * [393] UTF-8 Validation
 */

// @lc code=start
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  let count = 0;
  for (const byte of data) {
    if (count === 0) {
      if (byte >> 5 === 0b110) {
        count = 1;
      } else if (byte >> 4 === 0b1110) {
        count = 2;
      } else if (byte >> 3 === 0b11110) {
        count = 3;
      } else if (byte >> 7) {
        return false;
      }
    } else {
      if (byte >> 6 !== 0b10) {
        return false;
      }
      --count;
    }
  }
  return count === 0;
};
// @lc code=end
