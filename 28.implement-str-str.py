#
# @lc app=leetcode id=28 lang=python3
#
# [28] Implement strStr()
#

# Time:  O(n * k)
# Space: O(1)


# @lc code=start
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not needle:
            return 0
        for i in range(len(haystack)):
            for j in range(len(needle) + 1):
                if j == len(needle):
                    return i
                elif i + j == len(haystack):
                    return -1
                elif haystack[i + j] != needle[j]:
                    break
        return -1


# @lc code=end
