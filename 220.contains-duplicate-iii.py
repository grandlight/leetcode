#
# @lc app=leetcode id=220 lang=python3
#
# [220] Contains Duplicate III
#

# Time:  O(n * t)
# Space: O(max(k, t))

from typing import List
from collections import OrderedDict


# @lc code=start
class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        window = OrderedDict()
        for num in nums:
            if len(window) > k:
                window.popitem(False)

            bucket = num if not t else num // t
            for n in (
                window.get(bucket - 1),
                window.get(bucket),
                window.get(bucket + 1),
            ):
                if n is not None and abs(num - n) <= t:
                    return True
            window[bucket] = num
        return False


# @lc code=end
