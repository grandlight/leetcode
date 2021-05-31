/*
 * @lc app=leetcode id=355 lang=javascript
 *
 * [355] Design Twitter
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.time = 0;
  this.tweets = {};
  this.friends = {};
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.follow(userId, userId);
  if (!this.tweets[userId]) {
    this.tweets[userId] = new Map();
  }
  this.tweets[userId].set(this.time++, tweetId);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  if (!this.friends[userId]) {
    return [];
  }
  const res = [];
  const top10 = new Map();
  for (const id of this.friends[userId].keys()) {
    if (!this.tweets[id]) {
      continue;
    }
    for (const t of this.tweets[id]) {
      top10.set(t[0], t[1]);
      if (top10.size > 10) {
        const earliest = Array.from(top10.keys()).sort(
          (a, b) => Number(a) - Number(b)
        )[0];
        top10.delete(earliest);
      }
    }
  }
  for (const k of Array.from(top10.keys()).sort(
    (a, b) => Number(b) - Number(a)
  )) {
    res.push(top10.get(k));
  }
  return res;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.friends[followerId]) {
    this.friends[followerId] = new Set();
  }
  this.friends[followerId].add(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (followerId !== followeeId) {
    this.friends[followerId].delete(followeeId);
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end
