#
# @lc app=leetcode id=40 lang=python3
#
# [40] Combination Sum II
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        def helper(cur: list, idx, t):
            if t <= 0:
                if t == 0:
                    res.append(cur[:])
                return
            for i in range(idx, len(candidates)):
                if i > idx and candidates[i] == candidates[i - 1]:
                    continue
                cur.append(candidates[i])
                helper(cur, i + 1, t - candidates[i])
                cur.pop()

        candidates.sort()
        res = []
        helper([], 0, target)
        return res


# @lc code=end
