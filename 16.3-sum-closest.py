#
# @lc app=leetcode id=16 lang=python3
#
# [16] 3Sum Closest
#

# Time:  O(n^2)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        min_diff, closet = float("inf"), float("inf")
        nums.sort()
        for i in range(len(nums) - 2):
            left, right = i + 1, len(nums) - 1
            while left < right:
                sum = nums[i] + nums[left] + nums[right]
                diff = abs(sum - target)
                if diff < min_diff:
                    min_diff = diff
                    closet = sum
                if sum < target:
                    left += 1
                else:
                    right -= 1
        return closet


# @lc code=end
