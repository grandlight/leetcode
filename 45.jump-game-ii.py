#
# @lc app=leetcode id=45 lang=python3
#
# [45] Jump Game II
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def jump(self, nums: List[int]) -> int:
        count, reach, curr_reach = 0, 0, 0
        for i, jump in enumerate(nums):
            if i > reach:
                return -1
            if i > curr_reach:
                curr_reach, count = reach, count + 1
            reach = max(reach, i + jump)
        return count


# @lc code=end
