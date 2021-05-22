/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const calc = (n1, n2, op) => {
    if (op === "+") {
      return n1 + n2;
    } else if (op === "-") {
      return n1 - n2;
    } else if (op === "*") {
      return n1 * n2;
    } else if (op === "/") {
      return Math.trunc(n1 / n2);
    }
  };
  const stk = [];
  const ops = "+-*/";
  for (const token of tokens) {
    if (!ops.includes(token)) {
      stk.push(parseInt(token));
    } else {
      const n2 = stk.pop();
      const n1 = stk.pop();
      stk.push(calc(n1, n2, token));
    }
  }
  return stk[0];
};
// @lc code=end
