/*
 * @lc app=leetcode id=310 lang=javascript
 *
 * [310] Minimum Height Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) {
    return [0];
  }
  const neighbors = {};
  for (const edge of edges) {
    if (!neighbors[edge[0]]) {
      neighbors[edge[0]] = new Set();
    }
    if (!neighbors[edge[1]]) {
      neighbors[edge[1]] = new Set();
    }
    neighbors[edge[0]].add(edge[1]);
    neighbors[edge[1]].add(edge[0]);
  }

  const res = new Set();
  let prevLeaves = [];
  for (let i = 0; i < n; ++i) {
    res.add(i);
    if (neighbors[i].size === 1) {
      prevLeaves.push(i);
    }
  }
  while (res.size > 2) {
    const currLeaves = [];
    for (const src of prevLeaves) {
      res.delete(src);
      for (const dst of neighbors[src]) {
        if (res.has(dst)) {
          neighbors[dst].delete(src);
          if (neighbors[dst].size === 1) {
            currLeaves.push(dst);
          }
        }
      }
    }
    prevLeaves = currLeaves;
  }
  return Array.from(res);
};
// @lc code=end
