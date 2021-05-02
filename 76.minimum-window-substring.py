#
# @lc app=leetcode id=76 lang=python3
#
# [76] Minimum Window Substring
#

# Time:  O(n)
# Space: O(k), k is the number of different characters

from collections import defaultdict


# @lc code=start
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        window = defaultdict(int)
        for c in t:
            window[c] += 1

        left, right, req_char = 0, 0, len(window.keys())
        start, min_len = 0, float("inf")
        while right < len(s):
            c = s[right]
            right += 1
            if c in window:
                window[c] -= 1
                if window[c] == 0:
                    req_char -= 1

            while req_char == 0:
                if right - left < min_len:
                    start = left
                    min_len = right - left
                c = s[left]
                left += 1
                if c in window:
                    if window[c] == 0:
                        req_char += 1
                    window[c] += 1
        return "" if min_len == float("inf") else s[start : start + min_len]


# @lc code=end
