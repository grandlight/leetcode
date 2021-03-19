--
-- @lc app=leetcode id=183 lang=mysql
--
-- [183] Customers Who Never Order
--

-- @lc code=start
# Write your MySQL query statement below

SELECT c.Name AS Customers
FROM Customers AS c
LEFT JOIN Orders AS o
ON c.Id = o.CustomerId
WHERE o.CustomerId is NULL

-- SELECT Customers.Name AS Customers
-- FROM Customers
-- WHERE Customers.Id
-- NOT IN (SELECT Orders.CustomerId FROM Orders)

-- @lc code=end

