#
# @lc app=leetcode id=384 lang=python3
#
# [384] Shuffle an Array
#

# Time:  O(n)
# Space: O(n)

from typing import List
import random


# @lc code=start
class Solution:
    def __init__(self, nums: List[int]):
        self.nums = nums

    def reset(self) -> List[int]:
        return self.nums

    def shuffle(self) -> List[int]:
        nums = self.nums[:]
        for i in range(len(nums)):
            j = random.randint(0, i)
            nums[i], nums[j] = nums[j], nums[i]
        return nums


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
# @lc code=end
