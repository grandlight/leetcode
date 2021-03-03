#
# @lc app=leetcode id=67 lang=python3
#
# [67] Add Binary
#

# Time:  O(n)
# Space: O(1)


# @lc code=start
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        res, max_len, carry = "", max(len(a), len(b)), 0
        for i in range(1, max_len + 1):
            na = 0 if i > len(a) else int(a[-i])
            nb = 0 if i > len(b) else int(b[-i])
            carry, bit = divmod(na + nb + carry, 2)
            res = str(bit) + res
        return "1" + res if carry else res


# @lc code=end
