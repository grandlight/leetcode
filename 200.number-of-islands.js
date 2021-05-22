/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] !== "1") {
        continue;
      }
      const q = [[i, j]];
      while (q.length) {
        const [x, y] = q.shift();
        if (0 <= x && x < m && 0 <= y && y < n && grid[x][y] === "1") {
          grid[x][y] = "#";
          q.push([x, y + 1], [x, y - 1], [x + 1, y], [x - 1, y]);
        }
      }
      ++res;
    }
  }
  return res;
};
// @lc code=end
