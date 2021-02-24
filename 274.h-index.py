#
# @lc app=leetcode id=274 lang=python3
#
# [274] H-Index
#

# solution 1 (similar concept as H-Index II)
# Time:  O(nlogn)
# Space: O(1)

# solution 2
# Time:  O(n)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        # solution 1
        citations.sort(reverse=True)
        h = 0
        for cit in citations:
            if cit < h + 1:
                break
            h += 1
        return h

        # solution 2
        N = len(citations)
        count = [0] * (N + 1)
        for cit in citations:
            if cit > N:
                count[N] += 1
            else:
                count[cit] += 1

        h = 0
        for i in range(N, -1, -1):
            h += count[i]
            if h >= i:
                return i
        return h


# @lc code=end
