#
# @lc app=leetcode id=168 lang=python3
#
# [168] Excel Sheet Column Title
#

# Time:  O(logn)
# Space: O(1)

# @lc code=start
class Solution:
    def convertToTitle(self, n: int) -> str:
        res = ""
        while n:
            res += chr((n - 1) % 26 + ord("A"))
            n = (n - 1) // 26
        return res[::-1]


# @lc code=end
