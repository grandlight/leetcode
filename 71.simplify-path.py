#
# @lc app=leetcode id=71 lang=python3
#
# [71] Simplify Path
#

# Time:  O(n)
# Space: O(n)

# @lc code=start
class Solution:
    def simplifyPath(self, path: str) -> str:
        stack, tokens = [], path.split("/")
        for token in tokens:
            if token == "..":
                if stack:
                    stack.pop()
            elif token and token != ".":
                stack.append(token)
        return "/" + "/".join(stack)


# @lc code=end
