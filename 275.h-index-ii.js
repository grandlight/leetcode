/*
 * @lc app=leetcode id=275 lang=javascript
 *
 * [275] H-Index II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const N = citations.length;
  let left = 0;
  let right = N;
  while (left < right) {
    const mid = left + Math.trunc((right - left) / 2);
    if (citations[mid] < N - mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return N - right;
};
// @lc code=end
