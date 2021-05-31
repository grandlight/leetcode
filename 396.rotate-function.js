/*
 * @lc app=leetcode id=396 lang=javascript
 *
 * [396] Rotate Function
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
  const sum = A.reduce((accu, curr) => accu + curr);
  let fi = 0;
  for (let i = 0; i < A.length; ++i) {
    fi += i * A[i];
  }
  let res = fi;
  for (let i = 0; i < A.length; ++i) {
    fi += sum - A.length * A[A.length - 1 - i];
    res = Math.max(res, fi);
  }
  return res;
};
// @lc code=end
