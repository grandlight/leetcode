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
  while (queue.length > 0) {
    let q = queue.shift();
    for (let next of courses[q].next) {
      if (--courses[next].pren === 0) {
        queue.push(next);
      }
    }
  }

  for (let course of courses) {
    if (course.pren !== 0) return false;
  }
  return true;
};
// @lc code=end
