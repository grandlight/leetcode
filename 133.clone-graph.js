/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

// @lc code=start
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  let map = {};

  let dfs = (currNode) => {
    if (!currNode) return;
    const val = currNode.val;
    if (map.hasOwnProperty(val)) return map[val];
    map[val] = new Node(val);
    for (let i = 0; i < currNode.neighbors.length; ++i) {
      map[val].neighbors.push(dfs(currNode.neighbors[i]));
    }
    return map[val];
  };

  return dfs(node);
};
// @lc code=end
