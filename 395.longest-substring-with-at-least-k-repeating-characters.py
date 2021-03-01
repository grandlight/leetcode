#
# @lc app=leetcode id=395 lang=python3
#
# [395] Longest Substring with At Least K Repeating Characters
#

# Time:  O(n)
# Space: O(1)

from collections import defaultdict


# @lc code=start
class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        def helper(s, k, start, end):
            count = defaultdict(int)
            for i in range(start, end):
                count[s[i]] += 1
            max_len = 0
            i = start
            while i < end:
                while i < end and count[s[i]] < k:
                    i += 1
                j = i
                while j < end and count[s[j]] >= k:
                    j += 1

                if i == start and j == end:
                    return end - start

                max_len = max(max_len, helper(s, k, i, j))
                i = j
            return max_len

        return helper(s, k, 0, len(s))


# @lc code=end
