#
# @lc app=leetcode id=215 lang=python3
#
# [215] Kth Largest Element in an Array
#

# Time:  O(n)
# Space: O(1)

# heap
# Time:  O(nlogk)
# Space: O(min(n, k))

from typing import List
import heapq  # min_heap


# @lc code=start
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        def helper(left, right):
            pivot, i, j = nums[left], left + 1, right
            while i <= j:
                if nums[i] < pivot and pivot < nums[j]:
                    nums[i], nums[j] = nums[j], nums[i]
                    i, j = i + 1, j - 1
                if nums[i] >= pivot:
                    i += 1
                if nums[j] <= pivot:
                    j -= 1
            nums[left], nums[j] = nums[j], nums[left]
            return j

        left, right = 0, len(nums) - 1
        while True:
            pos = helper(left, right)
            if pos == k - 1:
                return nums[pos]
            elif pos > k - 1:
                right = pos - 1
            else:
                left = pos + 1

        # heap
        min_heap = []
        for num in nums:
            heapq.heappush(min_heap, num)
            if len(min_heap) > k:
                heapq.heappop(min_heap)
        return min_heap[0]


# @lc code=end
