#
# @lc app=leetcode id=53 lang=python3
#
# [53] Maximum Subarray
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        res, cur = float("-inf"), 0
        for num in nums:
            cur = max(cur + num, num)
            res = max(res, cur)
        return res

        # divide and conquer, time complexity: O(nlogn)
        if not nums:
            return 0

        def helper(left, right):
            if left >= right:
                return nums[left]
            mid = left + (right - left) // 2
            max_l = helper(left, mid - 1)
            max_r = helper(mid + 1, right)
            max_m = nums[mid]
            cur = max_m
            for i in range(mid - 1, left - 1, -1):
                cur += nums[i]
                max_m = max(max_m, cur)
            cur = max_m
            for i in range(mid + 1, right + 1):
                cur += nums[i]
                max_m = max(max_m, cur)
            return max(max_l, max_r, max_m)

        return helper(0, len(nums) - 1)


# @lc code=end
