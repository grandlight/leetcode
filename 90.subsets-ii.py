#
# @lc app=leetcode id=90 lang=python3
#
# [90] Subsets II
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        # iterative
        res, prev_size = [[]], 0
        for i in range(len(nums)):
            size = len(res)
            for j in range(size):
                if i == 0 or nums[i] != nums[i - 1] or j >= prev_size:
                    res.append(list(res[j]))
                    res[-1].append(nums[i])
            prev_size = size
        return res

        # recursive
        def helper(cur: List[int], idx: int):
            res.append(cur.copy())
            i = idx
            while i < len(nums):
                cur.append(nums[i])
                helper(cur, i + 1)
                cur.pop()
                while i + 1 < len(nums) and nums[i] == nums[i + 1]:
                    i += 1
                i += 1

        res = []
        helper([], 0)
        return res


# @lc code=end
