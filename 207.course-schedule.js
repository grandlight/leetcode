/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
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
  while (q.length) {
    const course = q.shift();
    for (const pre of prerequisites) {
      if (course === pre[1]) {
        --inDegree[pre[0]];
        if (inDegree[pre[0]] === 0) {
          q.push(pre[0]);
        }
      }
    }
  }
  return inDegree.every((x) => x === 0);
};
// @lc code=end
