#
# @lc app=leetcode id=130 lang=python3
#
# [130] Surrounded Regions
#

# Time:  O(m * n)
# Space: O(m + n)

from collections import deque
from typing import List


# @lc code=start
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        def helper(x, y):
            if 0 <= x < m and 0 <= y < n and board[x][y] == "O":
                board[x][y] = "#"
                helper(x - 1, y), helper(x + 1, y)
                helper(x, y - 1), helper(x, y + 1)

        m, n = len(board), len(board[0])

        # bfs
        for i in range(m):
            for j in range(n):
                if 0 < i < m - 1 and 0 < j < n - 1 or board[i][j] != "O":
                    continue
                queue = deque([(i, j)])
                while queue:
                    x, y = queue.popleft()
                    if 0 <= x < m and 0 <= y < n and board[x][y] == "O":
                        board[x][y] = "#"
                        queue.append((x - 1, y)), queue.append((x + 1, y))
                        queue.append((x, y - 1)), queue.append((x, y + 1))
        for i in range(m):
            for j in range(n):
                if board[i][j] == "O":
                    board[i][j] = "X"
                elif board[i][j] == "#":
                    board[i][j] = "O"
        return

        # dfs
        for i in range(1, m - 1):
            helper(i, 0), helper(i, n - 1)
        for j in range(n):
            helper(0, j), helper(m - 1, j)
        for i in range(m):
            for j in range(n):
                if board[i][j] == "O":
                    board[i][j] = "X"
                elif board[i][j] == "#":
                    board[i][j] = "O"


# @lc code=end
