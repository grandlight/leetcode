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
  let N = citations.length;
  let left = 0;
  let right = N;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let h = N - mid;
    if (citations[mid] >= h) {
      right = mid;
    } else left = mid + 1;
  }
  return N - left;
};
// @lc code=end
