#
# @lc app=leetcode id=79 lang=python3
#
# [79] Word Search
#

# Time:  O(m * n * 3^l)
# Space: O(l), l is the lenght of the word

from typing import List


# @lc code=start
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def helper(idx, i, j):
            if idx == len(word):
                return True
            if i < 0 or j < 0 or i >= m or j >= n or board[i][j] != word[idx]:
                return False
            w = board[i][j]
            board[i][j] = "#"
            res = helper(idx + 1, i - 1, j) or helper(idx + 1, i + 1, j)
            res = res or helper(idx + 1, i, j - 1) or helper(idx + 1, i, j + 1)
            board[i][j] = w
            return res

        m, n = len(board), len(board[0])
        for i in range(m):
            for j in range(n):
                if helper(0, i, j):
                    return True
        return False


# @lc code=end
