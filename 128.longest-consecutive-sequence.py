#
# @lc app=leetcode id=128 lang=python3
#
# [128] Longest Consecutive Sequence
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        res, num2len = 0, {num: 0 for num in nums}
        for num in nums:
            if num2len[num] == 0:
                num2len[num] += 1
                left = num2len.get(num - 1, 0)
                right = num2len.get(num + 1, 0)
                num_len = left + 1 + right
                num2len[num - left] = num_len
                num2len[num + right] = num_len
                res = max(res, num_len)
        return res


# @lc code=end
