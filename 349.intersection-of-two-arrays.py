#
# @lc app=leetcode id=349 lang=python3
#
# [349] Intersection of Two Arrays
#

# set
# Time:  O(m + n)
# Space: O(min(m, n))

# sort
# Time:  O(nlogn)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = []

        if len(nums1) > len(nums2):
            return self.intersection(nums2, nums1)

        lookup = set()
        for num in nums1:
            lookup.add(num)

        for num in nums2:
            if num in lookup:
                lookup.discard(num)
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
                if not res or res[-1] != nums1[i]:
                    res.append(nums1[i])
                i += 1
                j += 1
        return res


# @lc code=end
