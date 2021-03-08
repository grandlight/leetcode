#
# @lc app=leetcode id=46 lang=python3
#
# [46] Permutations
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def helper(cur: list, idx):
            if len(cur) == len(nums):
                res.append(cur[:])
                return
            for i in range(len(nums)):
                if visited[i]:
                    continue
                visited[i] = True
                cur.append(nums[i])
                helper(cur, idx + 1)
                cur.pop()
                visited[i] = False

        res, visited = [], [False] * len(nums)
        helper([], 0)
        return res


# @lc code=end
