/*
 * @lc app=leetcode id=225 lang=golang
 *
 * [225] Implement Stack using Queues
 */

package leetcode

// @lc code=start
type MyStack struct {
	queue []int
}

/** Initialize your data structure here. */
func Constructor225() MyStack {
	return MyStack{[]int{}}
}

/** Push element x onto stack. */
func (this *MyStack) Push(x int) {
	this.queue = append(this.queue, x)
	for i := 0; i < len(this.queue)-1; i++ {
		this.queue = append(this.queue, this.queue[0])
		this.queue = this.queue[1:]
	}
}

/** Removes the element on top of the stack and returns that element. */
func (this *MyStack) Pop() int {
	top := this.queue[0]
	this.queue = this.queue[1:]
	return top
}

/** Get the top element. */
func (this *MyStack) Top() int {
	return this.queue[0]
}

/** Returns whether the stack is empty. */
func (this *MyStack) Empty() bool {
	return len(this.queue) == 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.Empty();
 */
// @lc code=end
