#
# @lc app=leetcode id=332 lang=python3
#
# [332] Reconstruct Itinerary
#

# Time:  O(t! / (n1! * n2! * ... nk!)), t is the total number of tickets,
# Space: O(t)                          ni is the number of the ticket which from is city i,
#                                       k is the total number of cities.

from collections import defaultdict
from typing import List


# @lc code=start
class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        def helper(origin, ticket_cnt):
            if ticket_cnt == 0:
                return True
            for i, (dest, valid) in enumerate(graph[origin]):
                if valid:
                    graph[origin][i][1] = False
                    res.append(dest)
                    if helper(dest, ticket_cnt - 1):
                        return res
                    res.pop()
                    graph[origin][i][1] = True
            return False

        graph = defaultdict(list)
        for ticket in tickets:
            graph[ticket[0]].append([ticket[1], True])
        for k in graph.keys():
            graph[k].sort()

        origin = "JFK"
        res = [origin]
        helper(origin, len(tickets))
        return res


# @lc code=end
