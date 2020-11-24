/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.head = new Node(0, 0);
  this.tail = new Node(0, 0);
  this.head.next = this.tail;
  this.tail.prev = this.head;

  this.insertHead = (node) => {
    let h = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = h;
    h.prev = node;
  };

  this.removeTail = () => {
    let node = this.tail.prev;
    this.remove(node);
    this.cache.delete(node.key);
  };

  this.remove = (node) => {
    let p = node.prev;
    let n = node.next;
    p.next = n;
    n.prev = p;
    node.prev = null;
    node.next = null;
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;
  let node = this.cache.get(key);
  this.remove(node);
  this.insertHead(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
  }
  let node = new Node(key, value);
  this.cache.set(key, node);
  this.insertHead(node);
  if (this.cache.size > this.capacity) {
    this.removeTail();
  }
};

/**
 * @param {number} key
 * @param {number} val
 * @return {void}
 */
var Node = function (key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
