/*
 * @lc app=leetcode id=388 lang=javascript
 *
 * [388] Longest Absolute File Path
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  let maxLength = 0;
  const lookup = { 0: 0 };
  const lines = input.split("\n");
  for (const line of lines) {
    let depth = -1;
    while (line[++depth] === "\t");
    const name = line.slice(depth);
    if (name.includes(".")) {
      maxLength = Math.max(maxLength, lookup[depth] + name.length);
    } else {
      lookup[depth + 1] = lookup[depth] + name.length + 1;
    }
  }
  return maxLength;
};
// @lc code=end
