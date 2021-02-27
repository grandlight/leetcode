#
# @lc app=leetcode id=289 lang=python3
#
# [289] Game of Life
#

# Time:  O(m * n)
# Space: O(1)


from typing import List


# @lc code=start
class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        m = len(board)
        n = len(board[0]) if m else 0

        for i in range(m):
            for j in range(n):
                live_count = 0  # live include self
                for x in range(max(i - 1, 0), min(i + 2, m)):
                    for y in range(max(j - 1, 0), min(j + 2, n)):
                        live_count += board[x][y] & 1
                # live + 3 live neighbors = 4
                # live + 2 live neighbors = 3
                # dead + 3 live neighbors = 3
                if (board[i][j] and live_count == 4) or live_count == 3:
                    board[i][j] |= 2

        for i in range(m):
            for j in range(n):
                board[i][j] >>= 1
        return

        # 0: dead -> dead
        # 1: live -> live
        # 2: live -> dead
        # 3: dead -> live
        for i in range(m):
            for j in range(n):
                live_nb = 0  # live neighbor
                for x in range(max(i - 1, 0), min(i + 2, m)):
                    for y in range(max(j - 1, 0), min(j + 2, n)):
                        if x != i or y != j:
                            live_nb += board[x][y] == 1 or board[x][y] == 2
                if board[i][j] and (live_nb < 2 or live_nb > 3):
                    board[i][j] = 2
                elif not board[i][j] and live_nb == 3:
                    board[i][j] = 3

        for i in range(m):
            for j in range(n):
                board[i][j] %= 2


# @lc code=end
