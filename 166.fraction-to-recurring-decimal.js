/*
 * @lc app=leetcode id=166 lang=javascript
 *
 * [166] Fraction to Recurring Decimal
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  let res =
    (numerator > 0 && denominator < 0) || (numerator < 0 && denominator > 0)
      ? "-"
      : "";
  let absN = Math.abs(numerator);
  let absD = Math.abs(denominator);
  res += `${Math.trunc(absN / absD)}`;
  absN = (absN % absD) * 10;
  if (absN > 0) {
    res += ".";
  }

  const lookup = {};
  while (absN && !(absN in lookup)) {
    lookup[absN] = res.length;
    res += `${Math.trunc(absN / absD)}`;
    absN = (absN % absD) * 10;
  }
  if (absN in lookup) {
    return `${res.slice(0, lookup[absN])}(${res.slice(lookup[absN])})`;
  }
  return res;
};
// @lc code=end
