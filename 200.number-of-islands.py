#
# @lc app=leetcode id=200 lang=python3
#
# [200] Number of Islands
#

# Time:  O(m * n)
# Space: O(m * n)

from collections import deque
from typing import List


# @lc code=start
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        def helper(x, y):
            if 0 <= x < m and 0 <= y < n and grid[x][y] == "1":
                grid[x][y] = "#"
                helper(x - 1, y), helper(x + 1, y)
                helper(x, y - 1), helper(x, y + 1)

        res, m, n = 0, len(grid), len(grid[0])

        # bfs
        for i in range(m):
            for j in range(n):
                if grid[i][j] != "1":
                    continue
                res, queue = res + 1, deque([(i, j)])
                while queue:
                    x, y = queue.popleft()
                    if 0 <= x < m and 0 <= y < n and grid[x][y] == "1":
                        grid[x][y] = "#"
                        queue.append((x - 1, y)), queue.append((x + 1, y))
                        queue.append((x, y - 1)), queue.append((x, y + 1))
        return res

        # dfs
        for i in range(m):
            for j in range(n):
                if grid[i][j] != "1":
                    continue
                res += 1
                helper(i, j)
        return res


# @lc code=end
