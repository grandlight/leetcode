--
-- @lc app=leetcode id=180 lang=mysql
--
-- [180] Consecutive Numbers
--

-- @lc code=start
# Write your MySQL query statement below

SELECT DISTINCT l1.num AS ConsecutiveNums
FROM Logs AS l1
JOIN Logs AS l2 ON l1.id = l2.id - 1
JOIN Logs AS l3 ON l1.id = l3.id - 2
WHERE l1.num = l2.num AND l1.num = l3.num

-- SELECT DISTINCT l1.num AS ConsecutiveNums
-- FROM Logs AS l1, Logs AS l2, Logs AS l3
-- WHERE l1.id = l2.id - 1 AND l1.id = l3.id - 2
-- AND l1.num = l2.num AND l1.num = l3.num

-- @lc code=end

