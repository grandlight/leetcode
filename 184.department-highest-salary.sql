--
-- @lc app=leetcode id=184 lang=mysql
--
-- [184] Department Highest Salary
--

-- @lc code=start
# Write your MySQL query statement below

SELECT d.Name AS Department, e.Name AS Employee, e.Salary
FROM Employee AS e
JOIN Department AS d
ON e.DepartmentId = d.Id
WHERE e.Salary IN
  (SELECT MAX(Salary) FROM Employee AS t
   WHERE e.DepartmentId = t.DepartmentId)

-- SELECT d.Name AS Department, e.Name AS Employee, e.Salary
-- FROM Employee AS e, Department AS d
-- WHERE e.DepartmentId = d.Id AND
-- e.Salary = (SELECT MAX(Salary) FROM Employee AS t WHERE t.DepartmentId = d.Id)

-- @lc code=end

