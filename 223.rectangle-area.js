/*
 * @lc app=leetcode id=223 lang=javascript
 *
 * [223] Rectangle Area
 */

// @lc code=start
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  const sumArea = (C - A) * (D - B) + (G - E) * (H - F);
  if (A >= G || B >= H || C <= E || D <= F) {
    return sumArea;
  }
  const dupX = Math.min(C, G) - Math.max(A, E);
  const dupY = Math.min(D, H) - Math.max(B, F);
  return sumArea - dupX * dupY;
};
// @lc code=end
