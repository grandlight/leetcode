#
# @lc app=leetcode id=3 lang=python3
#
# [3] Longest Substring Without Repeating Characters
#

# Time:  O(n)
# Space: O(1)

from collections import defaultdict


# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        res, window = 0, defaultdict(int)
        left, right = 0, 0
        while right < len(s):
            ch_r = s[right]
            right += 1
            window[ch_r] += 1
            while window[ch_r] > 1:
                ch_l = s[left]
                left += 1
                window[ch_l] -= 1
            res = max(res, right - left)
        return res


# @lc code=end
