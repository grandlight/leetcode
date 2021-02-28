#
# @lc app=leetcode id=350 lang=python3
#
# [350] Intersection of Two Arrays II
#

# set
# Time:  O(m + n)
# Space: O(min(m, n))

# sort
# Time:  O(nlogn) or O(m + n) if both are sorted
# Space: O(1)

from typing import List
from collections import defaultdict


# @lc code=start
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = []

        if len(nums1) > len(nums2):
            return self.intersect(nums2, nums1)

        lookup = defaultdict(int)
        for num in nums1:
            lookup[num] += 1

        for num in nums2:
            if lookup[num] > 0:
                lookup[num] -= 1
                res.append(num)
        return res

        nums1.sort(), nums2.sort()
        i, j = 0, 0
        while i < len(nums1) and j < len(nums2):
            if nums1[i] < nums2[j]:
                i += 1
            elif nums1[i] > nums2[j]:
                j += 1
            else:
                res.append(nums1[i])
                i += 1
                j += 1
        return res


# @lc code=end
