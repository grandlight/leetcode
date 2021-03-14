#
# @lc app=leetcode id=394 lang=python3
#
# [394] Decode String
#

# Time:  O(n)
# Space: O(n)

# @lc code=start
class Solution:
    def decodeString(self, s: str) -> str:
        n, curr, nums, strs = 0, [], [], []
        for c in s:
            if c.isdigit():
                n = n * 10 + int(c)
            elif c.isalpha():
                curr.append(c)
            elif c == "[":
                nums.append(n)
                strs.append(curr)
                n, curr = 0, []
            elif c == "]":
                strs[-1].extend(curr * nums.pop())
                curr = strs.pop()
        return "".join(curr)


# @lc code=end
