#
# @lc app=leetcode id=392 lang=python3
#
# [392] Is Subsequence
#

# Time:  O(n)
# Space: O(1)

# follow up
# Time:  O(nlogn)
# Space: O(1)

from collections import defaultdict


# @lc code=start
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if not s:
            return True
        i = 0
        for ch in t:
            if ch == s[i]:
                i += 1
            if i == len(s):
                break
        return i == len(s)

        # follow up
        def bs_greater(lst, idx):
            left, right = 0, len(lst)
            while left < right:
                mid = left + (right - left) // 2
                if lst[mid] <= idx:
                    left = mid + 1
                else:
                    right = mid
            return right

        pre, lookup = -1, defaultdict(list)
        for i in range(len(t)):
            lookup[t[i]].append(i)
        for ch in s:
            if ch not in lookup:
                return False
            lst = lookup[ch]
            idx = bs_greater(lst, pre)
            if idx == len(lst):
                return False
            pre = lst[idx]
        return True


# @lc code=end
