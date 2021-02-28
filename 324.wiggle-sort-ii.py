#
# @lc app=leetcode id=324 lang=python3
#
# [324] Wiggle Sort II
#

# Time:  O(nlogn)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        nums.sort()
        mid = (len(nums) - 1) // 2
        nums[::2], nums[1::2] = nums[mid::-1], nums[:mid:-1]
        return

        tmp = sorted(nums)
        left, right = (len(nums) - 1) // 2, len(nums) - 1
        for i in range(len(nums)):
            if i % 2 == 0:
                nums[i] = tmp[left]
                left -= 1
            else:
                nums[i] = tmp[right]
                right -= 1


# @lc code=end
