#
# @lc app=leetcode id=355 lang=python3
#
# [355] Design Twitter
#

# Time:  O(klogu), k is most recently number of tweets,
#                  u is the number of the user's following.
# Space: O(t + f), t is the total number of tweets,
#                  f is the total number of followings.

from collections import defaultdict
from typing import List
import heapq


# @lc code=start
class Twitter:
    def __init__(self):
        self.time = 0
        self.most_recent_n = 10
        self.followings = defaultdict(set)
        self.messages = defaultdict(list)

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.time += 1
        self.messages[userId].append((self.time, tweetId))

    def getNewsFeed(self, userId: int) -> List[int]:
        max_heap = []  # heapq is min_heap so *= -1
        if self.messages[userId]:
            heapq.heappush(max_heap, (-self.messages[userId][-1][0], userId, 0))
        for uid in self.followings[userId]:
            if self.messages[uid]:
                heapq.heappush(max_heap, (-self.messages[uid][-1][0], uid, 0))
        res = []
        while max_heap and len(res) < self.most_recent_n:
            time, uid, curr = heapq.heappop(max_heap)
            next = curr + 1
            if next != len(self.messages[uid]):
                heapq.heappush(
                    max_heap, (-self.messages[uid][-(next + 1)][0], uid, next)
                )
            res.append(self.messages[uid][-(curr + 1)][1])
        return res

    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.followings[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        self.followings[followerId].discard(followeeId)


# Your Twitter object will be instantiated and called as such:
# obj = Twitter()
# obj.postTweet(userId,tweetId)
# param_2 = obj.getNewsFeed(userId)
# obj.follow(followerId,followeeId)
# obj.unfollow(followerId,followeeId)
# @lc code=end
