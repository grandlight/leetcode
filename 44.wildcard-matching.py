#
# @lc app=leetcode id=44 lang=python3
#
# [44] Wildcard Matching
#

# Time:  O(m * n)
# Space: O(1)

# @lc code=start
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        si, s_star, s_len = 0, -1, len(s)
        pi, p_star, p_len = 0, -1, len(p)
        while si < s_len:
            if pi < p_len and (p[pi] == s[si] or p[pi] == "?"):
                si, pi = si + 1, pi + 1
            elif pi < p_len and p[pi] == "*":
                s_star, p_star, pi = si, pi, pi + 1
            elif s_star >= 0:
                si, pi, s_star = s_star + 1, p_star + 1, s_star + 1
            else:
                return False
        while pi < p_len and p[pi] == "*":
            pi += 1
        return pi == p_len


# @lc code=end
