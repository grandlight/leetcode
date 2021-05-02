#
# @lc app=leetcode id=42 lang=python3
#
# [42] Trapping Rain Water
#

# Time:  O(n)
# Space: O(1)

# dp
# Time:  O(n)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0
        n = len(height)

        res, left, right = 0, 0, n - 1
        max_l, max_r = height[0], height[-1]
        while left < right:
            if max_l < max_r:
                res += max_l - height[left]
                max_l = max(max_l, height[left + 1])
                left += 1
            else:
                res += max_r - height[right]
                max_r = max(max_r, height[right - 1])
                right -= 1
        return res

        # dp
        dp_l, dp_r = [0] * n, [0] * n
        dp_l[0], dp_r[-1] = height[0], height[-1]
        for i in range(1, n):
            dp_l[i] = max(height[i], dp_l[i - 1])
        for i in range(n - 2, -1, -1):
            dp_r[i] = max(height[i], dp_r[i + 1])

        res = 0
        for i in range(n):
            res += min(dp_l[i], dp_r[i]) - height[i]
        return res


# @lc code=end
