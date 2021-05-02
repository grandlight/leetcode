#
# @lc app=leetcode id=218 lang=python3
#
# [218] The Skyline Problem
#

# Time:  O()
# Space: O()

from typing import List
import heapq


# @lc code=start
class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        idx, n = 0, len(buildings)
        liveBuildings, skyline = [], []
        while idx < n or len(liveBuildings) > 0:
            if len(liveBuildings) == 0 or (idx < n and buildings[idx][0] <= -liveBuildings[0][1]):
                start = buildings[idx][0]
                while idx < n and buildings[idx][0] == start:
                    heapq.heappush(liveBuildings, [-buildings[idx][2], -buildings[idx][1]])
                    idx += 1
            else:
                start = -liveBuildings[0][1]
                while len(liveBuildings) > 0 and -liveBuildings[0][1] <= start:
                    heapq.heappop(liveBuildings)
            height = len(liveBuildings) and -liveBuildings[0][0]
            if len(skyline) == 0 or skyline[-1][1] != height:
                skyline.append([start, height])
        return skyline


# @lc code=end
