#
# @lc app=leetcode id=290 lang=python3
#
# [290] Word Pattern
#

# Time:  O(n)
# Space: O(n)

# @lc code=start
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split()
        if len(pattern) != len(words):
            return False

        p_w, w_p = {}, {}
        for p, w in zip(pattern, words):
            if p not in p_w and w not in w_p:
                p_w[p] = w
                w_p[w] = p
            elif p not in p_w or p_w[p] != w:
                return False
        return True


# @lc code=end
