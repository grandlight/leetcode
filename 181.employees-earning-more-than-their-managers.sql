--
-- @lc app=leetcode id=181 lang=mysql
--
-- [181] Employees Earning More Than Their Managers
--

-- @lc code=start
# Write your MySQL query statement below

SELECT ee.Name AS Employee
FROM Employee AS ee, Employee AS mg
WHERE ee.ManagerId = mg.Id AND ee.Salary > mg.Salary

-- @lc code=end

