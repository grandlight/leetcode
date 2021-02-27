#
# @lc app=leetcode id=56 lang=python3
#
# [56] Merge Intervals
#

# Time:  O(nlogn)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        res = []
        intervals.sort()
        for interval in intervals:
            if not res or res[-1][1] < interval[0]:
                res.append(interval)
            else:
                res[-1][1] = max(res[-1][1], interval[1])
        return res


# @lc code=end
