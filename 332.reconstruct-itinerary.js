/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const helper = (origin, count) => {
    if (count === 0) {
      return true;
    }
    if (!graph[origin]) {
      return false;
    }
    for (let i = 0; i < graph[origin].length; ++i) {
      if (graph[origin][i][1]) {
        graph[origin][i][1] = false;
        res.push(graph[origin][i][0]);
        if (helper(graph[origin][i][0], count - 1)) {
          return res;
        }
        res.pop();
        graph[origin][i][1] = true;
      }
    }
    return false;
  };
  const graph = {};
  for (const ticket of tickets) {
    if (!graph[ticket[0]]) {
      graph[ticket[0]] = [];
    }
    graph[ticket[0]].push([ticket[1], true]);
  }
  for (const key of Object.keys(graph)) {
    graph[key].sort();
  }
  const res = ["JFK"];
  helper(res[0], tickets.length);
  return res;
};
// @lc code=end
