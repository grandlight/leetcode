#
# @lc app=leetcode id=239 lang=python3
#
# [239] Sliding Window Maximum
#

# Time:  O(n)
# Space: O(k)

from collections import deque
from typing import List


# @lc code=start
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        res, q = [], deque([])
        for i in range(len(nums)):
            if q and i - q[0] == k:
                q.popleft()
            while q and nums[q[-1]] <= nums[i]:
                q.pop()
            q.append(i)
            if i >= k - 1:
                res.append(nums[q[0]])
        return res


# @lc code=end
