#
# @lc app=leetcode id=393 lang=python3
#
# [393] UTF-8 Validation
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def validUtf8(self, data: List[int]) -> bool:
        count = 0
        for byte in data:
            if count == 0:
                if byte >> 5 == 0b110:
                    count = 1
                elif byte >> 4 == 0b1110:
                    count = 2
                elif byte >> 3 == 0b11110:
                    count = 3
                elif byte >> 7:
                    return False
            else:
                if byte >> 6 != 0b10:
                    return False
                count -= 1
        return count == 0


# @lc code=end
