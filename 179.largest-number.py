#
# @lc app=leetcode id=179 lang=python3
#
# [179] Largest Number
#

# Time:  O(nlogn)
# Space: O(1)

from typing import List
from functools import cmp_to_key


# @lc code=start
class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        def cmp_func(a, b):
            if a + b < b + a:
                return 1
            elif a + b > b + a:
                return -1
            else:
                return 0

        nums = [str(num) for num in nums]
        nums.sort(key=cmp_to_key(cmp_func))
        return "".join(nums).lstrip("0") or "0"


# @lc code=end
