/*
 * @lc app=leetcode id=155 lang=golang
 *
 * [155] Min Stack
 */

package leetcode

// @lc code=start
type MinStack struct {
	stack []int
	min   []int
}

/** initialize your data structure here. */
func Constructor155() MinStack {
	return MinStack{make([]int, 0), make([]int, 0)}
}

func (this *MinStack) Push(val int) {
	this.stack = append(this.stack, val)
	if len(this.min) == 0 || val <= this.min[len(this.min)-1] {
		this.min = append(this.min, val)
	}
}

func (this *MinStack) Pop() {
	if this.min[len(this.min)-1] == this.stack[len(this.stack)-1] {
		this.min = this.min[:len(this.min)-1]
	}
	this.stack = this.stack[:len(this.stack)-1]
}

func (this *MinStack) Top() int {
	return this.stack[len(this.stack)-1]
}

func (this *MinStack) GetMin() int {
	return this.min[len(this.min)-1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */
// @lc code=end
