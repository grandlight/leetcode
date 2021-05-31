/*
 * @lc app=leetcode id=241 lang=javascript
 *
 * [241] Different Ways to Add Parentheses
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
  const res = [];
  for (let i = 0; i < input.length; ++i) {
    if (!"+-*".includes(input[i])) {
      continue;
    }
    const resX = diffWaysToCompute(input.slice(0, i));
    const resY = diffWaysToCompute(input.slice(i + 1));
    for (const x of resX) {
      for (const y of resY) {
        if (input[i] === "+") {
          res.push(x + y);
        } else if (input[i] === "-") {
          res.push(x - y);
        } else if (input[i] === "*") {
          res.push(x * y);
        }
      }
    }
  }
  return res.length ? res : [Number(input)];
};

// @lc code=end
