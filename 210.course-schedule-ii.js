/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const inDegree = Array(numCourses).fill(0);
  for (const pre of prerequisites) {
    ++inDegree[pre[0]];
  }
  const q = [];
  for (let i = 0; i < numCourses; ++i) {
    if (inDegree[i] === 0) {
      q.push(i);
    }
  }
  const res = [];
  while (q.length) {
    const course = q.shift();
    res.push(course);
    for (const pre of prerequisites) {
      if (course === pre[1]) {
        --inDegree[pre[0]];
        if (inDegree[pre[0]] === 0) {
          q.push(pre[0]);
        }
      }
    }
  }
  return inDegree.every((x) => x === 0) ? res : [];
};
// @lc code=end
