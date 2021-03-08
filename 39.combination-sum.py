#
# @lc app=leetcode id=39 lang=python3
#
# [39] Combination Sum
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        def helper(cur: list, idx, t):
            if t <= 0:
                if t == 0:
                    res.append(cur[:])
                return
            for i in range(idx, len(candidates)):
                cur.append(candidates[i])
                helper(cur, i, t - candidates[i])
                cur.pop()

        res = []
        helper([], 0, target)
        return res


# @lc code=end
