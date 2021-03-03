#
# @lc app=leetcode id=43 lang=python3
#
# [43] Multiply Strings
#

# Time:  O(m * n)
# Space: O(m + n)

# @lc code=start
class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        len1, len2 = len(num1), len(num2)
        res = [0] * (len1 + len2)
        for i in range(len1 - 1, -1, -1):
            for j in range(len2 - 1, -1, -1):
                res[i + j + 1] += int(num1[i]) * int(num2[j])
                res[i + j] += res[i + j + 1] // 10
                res[i + j + 1] %= 10
        for i in range(len(res)):
            if res[i]:
                break
        return "".join(map(lambda x: str(x), res[i:]))


# @lc code=end
