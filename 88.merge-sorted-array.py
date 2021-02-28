#
# @lc app=leetcode id=88 lang=python3
#
# [88] Merge Sorted Array
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        i, j, last = m - 1, n - 1, m + n - 1
        while i >= 0 and j >= 0:
            if nums1[i] > nums2[j]:
                nums1[last] = nums1[i]
                i, last = i - 1, last - 1
            else:
                nums1[last] = nums2[j]
                j, last = j - 1, last - 1
        while j >= 0:
            nums1[last] = nums2[j]
            j, last = j - 1, last - 1


# @lc code=end
