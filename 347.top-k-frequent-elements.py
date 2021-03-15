#
# @lc app=leetcode id=347 lang=python3
#
# [347] Top K Frequent Elements
#

# Time:  O(nlogn)
# Space: O(min(n, k))

from collections import defaultdict
from typing import List
import heapq


# @lc code=start
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = defaultdict(int)
        res, min_heap = [], []
        for num in nums:
            count[num] += 1
        for key, val in count.items():
            heapq.heappush(min_heap, (-val, key))
        for i in range(k):
            val, key = heapq.heappop(min_heap)
            res.append(key)
        return res


# @lc code=end
