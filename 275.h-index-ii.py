#
# @lc app=leetcode id=275 lang=python3
#
# [275] H-Index II
#

# Time:  O(logn)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        N = len(citations)
        left, right = 0, N - 1
        while left <= right:
            mid = left + (right - left) // 2
            if citations[mid] >= N - mid:
                right = mid - 1
            else:
                left = mid + 1
        return N - left


# @lc code=end
