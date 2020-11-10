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
  let courses = new Array(numCourses);
  for (let i = 0; i < numCourses; ++i) {
    courses[i] = { next: [], pren: 0 };
  }
  for (let pre of prerequisites) {
    courses[pre[1]].next.push(pre[0]);
    courses[pre[0]].pren++;
  }

  let queue = [];
  for (let i = 0; i < numCourses; ++i) {
    if (courses[i].pren === 0) queue.push(i);
  }
  let res = [];
  while (queue.length > 0) {
    let q = queue.shift();
    for (let next of courses[q].next) {
      if (--courses[next].pren === 0) {
        queue.push(next);
      }
    }
    res.push(q);
  }

  return res.length === numCourses ? res : [];
};
// @lc code=end
