#
# @lc app=leetcode id=47 lang=python3
#
# [47] Permutations II
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        def helper(cur: list, idx):
            if len(cur) == len(nums):
                res.append(cur[:])
                return
            for i in range(len(nums)):
                if visited[i]:
                    continue
                if i > 0 and nums[i] == nums[i - 1] and visited[i - 1]:
                    continue
                visited[i] = True
                cur.append(nums[i])
                helper(cur, idx + 1)
                cur.pop()
                visited[i] = False

        nums.sort()
        res, visited = [], [False] * len(nums)
        helper([], 0)
        return res


# @lc code=end
