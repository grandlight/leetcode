#
# @lc app=leetcode id=168 lang=python3
#
# [168] Excel Sheet Column Title
#

# Time:  O(logn)
# Space: O(1)

# @lc code=start
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        res = ""
        while columnNumber:
            res = chr((columnNumber - 1) % 26 + 65) + res
            columnNumber = (columnNumber - 1) // 26
        return res


# @lc code=end
