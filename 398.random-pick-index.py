#
# @lc app=leetcode id=398 lang=python3
#
# [398] Random Pick Index
#

# Time:  O(n)
# Space: O(1)

from typing import List
import random


# @lc code=start
class Solution:
    def __init__(self, nums: List[int]):
        self.nums = nums

    def pick(self, target: int) -> int:
        res, cnt = -1, 1
        for i in range(len(self.nums)):
            if self.nums[i] != target:
                continue
            if random.randint(1, cnt) == 1:
                res = i
            cnt += 1
        return res


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.pick(target)
# @lc code=end
