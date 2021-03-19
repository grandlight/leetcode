--
-- @lc app=leetcode id=176 lang=mysql
--
-- [176] Second Highest Salary
--

-- @lc code=start
# Write your MySQL query statement below

SELECT
  (SELECT DISTINCT Salary FROM Employee
   ORDER BY Salary DESC
   LIMIT 1, 1)
AS SecondHighestSalary 

-- @lc code=end

