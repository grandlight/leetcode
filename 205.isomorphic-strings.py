#
# @lc app=leetcode id=205 lang=python3
#
# [205] Isomorphic Strings
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        s_t, t_s = {}, {}
        for i, j in zip(s, t):
            if i not in s_t and j not in t_s:
                s_t[i] = j
                t_s[j] = i
            elif i not in s_t or s_t[i] != j:
                return False
        return True


# @lc code=end
