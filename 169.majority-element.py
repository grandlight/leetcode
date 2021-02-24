#
# @lc app=leetcode id=169 lang=python3
#
# [169] Majority Element
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        res, cnt = 0, 0
        for num in nums:
            if num == res:
                cnt += 1
            elif cnt == 0:
                res, cnt = num, 1
            else:
                cnt -= 1
        return res


# @lc code=end
