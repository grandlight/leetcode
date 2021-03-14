#
# @lc app=leetcode id=388 lang=python3
#
# [388] Longest Absolute File Path
#

# Time:  O(n)
# Space: O(d), d is the max depth of the paths

# @lc code=start
class Solution:
    def lengthLongestPath(self, input: str) -> int:
        max_len, path_len = 0, {0: 0}
        for line in input.split("\n"):
            name = line.lstrip("\t")
            depth = len(line) - len(name)
            if "." in name:  # file
                max_len = max(max_len, path_len[depth] + len(name))
            else:  # dir
                path_len[depth + 1] = path_len[depth] + len(name) + 1
        return max_len


# @lc code=end
