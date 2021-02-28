#
# @lc app=leetcode id=345 lang=python3
#
# [345] Reverse Vowels of a String
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def reverseVowels(self, s: str) -> str:
        string = list(s)
        vowels = "aeiou"
        i, j = 0, len(string) - 1
        while i < j:
            if string[i].lower() not in vowels:
                i += 1
            elif string[j].lower() not in vowels:
                j -= 1
            else:
                string[i], string[j] = string[j], string[i]
                i += 1
                j -= 1
        return "".join(string)


# @lc code=end
