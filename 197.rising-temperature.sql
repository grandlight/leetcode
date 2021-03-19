--
-- @lc app=leetcode id=197 lang=mysql
--
-- [197] Rising Temperature
--

-- @lc code=start
# Write your MySQL query statement below

SELECT curr.id
FROM Weather AS curr
JOIN Weather AS prev
ON DATEDIFF(curr.recordDate, prev.recordDate) = 1
WHERE curr.temperature > prev.temperature

-- @lc code=end

