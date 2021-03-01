#
# @lc app=leetcode id=6 lang=python3
#
# [6] ZigZag Conversion
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        step, zigzag = numRows * 2 - 2, ""
        for i in range(numRows):
            for j in range(i, len(s), step):
                zigzag += s[j]
                if 0 < i < numRows - 1 and j + step - 2 * i < len(s):
                    zigzag += s[j + step - 2 * i]
        return zigzag


# @lc code=end
