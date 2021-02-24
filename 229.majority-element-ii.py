#
# @lc app=leetcode id=229 lang=python3
#
# [229] Majority Element II
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        res1, res2, cnt1, cnt2 = 0, 0, 0, 0
        for num in nums:
            if num == res1:
                cnt1 += 1
            elif num == res2:
                cnt2 += 1
            elif cnt1 == 0:
                res1, cnt1 = num, 1
            elif cnt2 == 0:
                res2, cnt2 = num, 1
            else:
                cnt1 -= 1
                cnt2 -= 1

        cnt1, cnt2 = 0, 0
        for num in nums:
            if num == res1:
                cnt1 += 1
            elif num == res2:
                cnt2 += 1
        res = []
        if cnt1 > len(nums) // 3:
            res.append(res1)
        if cnt2 > len(nums) // 3:
            res.append(res2)
        return res


# @lc code=end
