#
# @lc app=leetcode id=264 lang=python3
#
# [264] Ugly Number II
#

# Time:  O(n)
# Space: O(1)

import heapq


# @lc code=start
class Solution:
    def nthUglyNumber(self, n: int) -> int:
        ugly = [1]
        i2 = i3 = i5 = 0
        while len(ugly) < n:
            while ugly[i2] * 2 <= ugly[-1]:
                i2 += 1
            while ugly[i3] * 3 <= ugly[-1]:
                i3 += 1
            while ugly[i5] * 5 <= ugly[-1]:
                i5 += 1
            ugly.append(min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5))
        return ugly[-1]

        # time complexity: O(nlogn)
        ugly, heap = 0, []
        heapq.heappush(heap, 1)
        for _ in range(n):
            ugly = heapq.heappop(heap)
            if ugly % 2 == 0:
                heapq.heappush(heap, ugly * 2)
            elif ugly % 3 == 0:
                heapq.heappush(heap, ugly * 2)
                heapq.heappush(heap, ugly * 3)
            else:
                heapq.heappush(heap, ugly * 2)
                heapq.heappush(heap, ugly * 3)
                heapq.heappush(heap, ugly * 5)
        return ugly


# @lc code=end
