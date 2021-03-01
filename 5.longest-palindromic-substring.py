#
# @lc app=leetcode id=5 lang=python3
#
# [5] Longest Palindromic Substring
#

# Time:  O(n^2)
# Space: O(1)

# @lc code=start
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def expand(s, left, right):
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left, right = left - 1, right + 1
            return (right - left + 1) - 2

        left, right = -1, -2
        for i in range(len(s)):
            max_len = max(expand(s, i, i), expand(s, i, i + 1))
            if max_len > right - left + 1:
                right = i + max_len // 2
                left = right - max_len + 1
        right += 1
        return s[left:right] if left >= 0 else ""


# @lc code=end
