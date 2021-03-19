--
-- @lc app=leetcode id=175 lang=mysql
--
-- [175] Combine Two Tables
--

-- @lc code=start
# Write your MySQL query statement below

SELECT p.FirstName, p.LastName, a.City, a.State
FROM Person AS p
LEFT JOIN Address AS a
ON p.PersonId = a.PersonId

-- @lc code=end

