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
  if (!node) {
    return node;
  }
  const clone = {};
  clone[node.val] = new Node(node.val);
  const q = [node];
  while (q.length) {
    const curr = q.shift();
    for (const nb of curr.neighbors) {
      if (!(nb.val in clone)) {
        q.push(nb);
        clone[nb.val] = new Node(nb.val);
      }
      clone[curr.val].neighbors.push(clone[nb.val]);
    }
  }
  return clone[node.val];
};
// @lc code=end
