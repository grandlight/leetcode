/*
 * @lc app=leetcode id=399 lang=javascript
 *
 * [399] Evaluate Division
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = {};
  for (let i = 0; i < equations.length; ++i) {
    const [a, b] = equations[i];
    if (!graph[a]) {
      graph[a] = {};
    }
    if (!graph[b]) {
      graph[b] = {};
    }
    graph[a][b] = 1.0;
    graph[a][b] = values[i];
    graph[b][a] = 1.0 / values[i];
    graph[b][b] = 1.0;
  }
  for (const v in graph) {
    for (const i in graph[v]) {
      for (const j in graph[v]) {
        graph[i][j] = graph[i][v] * graph[v][j];
      }
    }
  }
  const res = [];
  for (let i = 0; i < queries.length; ++i) {
    const [a, b] = queries[i];
    if (a in graph && b in graph[a]) {
      res.push(graph[a][b]);
    } else {
      res.push(-1.0);
    }
  }
  return res;
};
// @lc code=end
