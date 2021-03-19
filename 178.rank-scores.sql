--
-- @lc app=leetcode id=178 lang=mysql
--
-- [178] Rank Scores
--

-- @lc code=start
# Write your MySQL query statement below

-- SELECT Score,
-- (SELECT COUNT(DISTINCT Score) FROM Scores
--  WHERE Score >= s.Score) AS `Rank`
-- FROM Scores AS s ORDER BY Score DESC

SELECT s.Score, COUNT(DISTINCT t.Score) `Rank`
FROM Scores AS s JOIN Scores t ON s.Score <= t.Score
GROUP BY s.Id ORDER BY s.Score DESC

-- @lc code=end

