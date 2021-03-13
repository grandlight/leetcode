#
# @lc app=leetcode id=36 lang=python3
#
# [36] Valid Sudoku
#

# Time:  O(9^2)
# Space: O(9)

from typing import List


# @lc code=start
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        def isValid(nums: list):
            nums = [n for n in nums if n != "."]
            return len(set(nums)) == len(nums)

        for i in range(9):
            if not isValid(board[i][j] for j in range(9)):
                return False
            if not isValid(board[j][i] for j in range(9)):
                return False

        nums = [0] * 9
        for i in range(3):
            for j in range(3):
                n = 0
                for x in range(i * 3, i * 3 + 3):
                    for y in range(j * 3, j * 3 + 3):
                        nums[n], n = board[x][y], n + 1
                if not isValid(nums):
                    return False
        return True


# @lc code=end
