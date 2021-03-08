#
# @lc app=leetcode id=78 lang=python3
#
# [78] Subsets
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        # iterative
        res = [[]]
        for i in range(len(nums)):
            size = len(res)
            for j in range(size):
                res.append(list(res[j]))
                res[-1].append(nums[i])
        return res

        # recursive
        def helper(cur: List[int], idx: int):
            res.append(cur.copy())
            for i in range(idx, len(nums)):
                cur.append(nums[i])
                helper(cur, i + 1)
                cur.pop()

        res = []
        helper([], 0)
        return res


# @lc code=end
