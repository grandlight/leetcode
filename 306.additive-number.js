/*
 * @lc app=leetcode id=306 lang=javascript
 *
 * [306] Additive Number
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  const add = (a, b) => {
    let res = "";
    let carry = 0;
    const maxLength = Math.max(a.length, b.length);
    for (let i = 0; i < maxLength; ++i) {
      let value = carry;
      if (i < a.length) {
        value += Number(a[a.length - 1 - i]);
      }
      if (i < b.length) {
        value += Number(b[b.length - 1 - i]);
      }
      carry = Math.trunc(value / 10);
      value %= 10;
      res += `${value}`;
    }
    if (carry) {
      res += `${carry}`;
    }
    return res.split("").reverse().join("");
  };
  for (let i = 1; i < num.length; ++i) {
    for (let j = i + 1; j < num.length; ++j) {
      let s1 = num.slice(0, i);
      let s2 = num.slice(i, j);
      if (
        (s1.length > 1 && s1[0] === "0") ||
        (s2.length > 1 && s2[0] === "0")
      ) {
        continue;
      }
      let expected = add(s1, s2);
      let cur = s1 + s2 + expected;
      while (cur.length < num.length) {
        s1 = add(s2, expected);
        s2 = expected;
        expected = s1;
        s1 = s2;
        cur += expected;
      }
      if (cur === num) {
        return true;
      }
    }
  }
  return false;
};

isAdditiveNumber("199100199");
// @lc code=end
