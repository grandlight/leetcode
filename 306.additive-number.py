#
# @lc app=leetcode id=306 lang=python3
#
# [306] Additive Number
#

# Time:  O(n^3)
# Space: O(1)

# @lc code=start
class Solution:
    def isAdditiveNumber(self, num: str) -> bool:
        def add(a, b):
            res, carry, val = "", 0, 0
            for i in range(max(len(a), len(b))):
                val = carry
                if i < len(a):
                    val += int(a[-1 - i])
                if i < len(b):
                    val += int(b[-1 - i])
                carry, val = divmod(val, 10)
                res += str(val)
            if carry:
                res += str(carry)
            return res[::-1]

        for i in range(1, len(num)):
            for j in range(i + 1, len(num)):
                s1, s2 = num[0:i], num[i:j]
                if (len(s1) > 1 and s1[0] == "0") or (len(s2) > 1 and s2[0] == "0"):
                    continue

                expected = add(s1, s2)
                cur = s1 + s2 + expected
                while len(cur) < len(num):
                    s1, s2, expected = s2, expected, add(s2, expected)
                    cur += expected
                if cur == num:
                    return True
        return False


# @lc code=end
