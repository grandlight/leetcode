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
  if (!grid.length || !grid[0].length) return 0;
  let m = grid.length;
  let n = grid[0].length;
  let queue = [];
  let num = 0;

  let check = (i, j) => {
    if (grid[i][j] === "1") {
      grid[i][j] = "0";
      queue.push([i, j]);
    }
  };

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === "0") continue;

      ++num;
      grid[i][j] = 0;
      queue.push([i, j]);
      while (queue.length > 0) {
        let [x, y] = queue.shift();
        if (x - 1 >= 0) check(x - 1, y);
        if (x + 1 < m) check(x + 1, y);
        if (y - 1 >= 0) check(x, y - 1);
        if (y + 1 < n) check(x, y + 1);
      }
    }
  }

  return num;
};
// @lc code=end
