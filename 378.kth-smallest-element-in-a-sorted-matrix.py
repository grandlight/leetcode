#
# @lc app=leetcode id=378 lang=python3
#
# [378] Kth Smallest Element in a Sorted Matrix
#

# Time:  O(m * n)
# Space: O(min(m, n, k))

from typing import List
import heapq  # min_heap


# @lc code=start
class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        max_heap = []
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                heapq.heappush(max_heap, -matrix[i][j])
                if len(max_heap) > k:
                    heapq.heappop(max_heap)
        return -max_heap[0]


# @lc code=end
