#
# @lc app=leetcode id=373 lang=python3
#
# [373] Find K Pairs with Smallest Sums
#

# Time:  O(k * log(m, n, k))
# Space: O(min(m, n, k))

import heapq
from typing import List


# @lc code=start
class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        if len(nums1) > len(nums2):
            self.kSmallestPairs(nums2, nums1, k)

        pairs, min_heap = [], []

        def push(i, j):
            if i < len(nums1) and j < len(nums2):
                heapq.heappush(min_heap, [nums1[i] + nums2[j], i, j])

        push(0, 0)
        while min_heap and len(pairs) < k:
            _, i, j = heapq.heappop(min_heap)
            pairs.append([nums1[i], nums2[j]])
            push(i, j + 1)
            if j == 0:
                push(i + 1, 0)  # at most queue min(n, m) space
        return pairs


# @lc code=end
