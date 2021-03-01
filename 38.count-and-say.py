#
# @lc app=leetcode id=38 lang=python3
#
# [38] Count and Say
#

# Time:  O(n * 2^n)
# Space: O(2^n)

# @lc code=start
class Solution:
    def countAndSay(self, n: int) -> str:
        res = "1"
        for _ in range(n - 1):
            cur, i = "", 0
            while i < len(res):
                cnt = 1
                while i + 1 < len(res) and res[i] == res[i + 1]:
                    cnt += 1
                    i += 1
                cur += str(cnt) + res[i]
                i += 1
            res = cur
        return res


# @lc code=end
