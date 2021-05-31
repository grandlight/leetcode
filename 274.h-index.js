/*
 * @lc app=leetcode id=274 lang=javascript
 *
 * [274] H-Index
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const N = citations.length;
  const count = Array(N + 1).fill(0);
  for (const cit of citations) {
    cit > N ? ++count[N] : ++count[cit];
  }
  let h = 0;
  for (let i = N; i > -1; --i) {
    h += count[i];
    if (h >= i) {
      return i;
    }
  }
  return h;
};
// @lc code=end
