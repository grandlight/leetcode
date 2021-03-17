#
# @lc app=leetcode id=223 lang=python3
#
# [223] Rectangle Area
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def computeArea(self, A: int, B: int, C: int, D: int, E: int, F: int, G: int, H: int) -> int:
        sum_area = (C - A) * (D - B) + (G - E) * (H - F)
        if A >= G or B >= H or C <= E or D <= F:
            return sum_area
        dup_area = (min(C, G) - max(A, E)) * (min(D, H) - max(B, F))
        return sum_area - dup_area


# @lc code=end
