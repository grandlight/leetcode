#
# @lc app=leetcode id=228 lang=python3
#
# [228] Summary Ranges
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        res = []
        i, n = 0, len(nums)
        while i < n:
            j = 1
            while i + j < n and nums[i + j] - nums[i] == j:
                j += 1
            if j == 1:
                res.append(str(nums[i]))
            else:
                res.append(f"{nums[i]}->{nums[i + j - 1]}")
            i += j
        return res


# @lc code=end
