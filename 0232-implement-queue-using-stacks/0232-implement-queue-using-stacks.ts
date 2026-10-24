class MyQueue {
    private stack:number[];
    private stack2:number[];
    constructor() {
        this.stack = [];
        this.stack2 = [];
    }

    push(x: number): void {
        this.stack.push(x);
    }

    pop(): number {
        if(this.stack.length === 0 && this.stack2.length === 0) return -1;
        if(this.stack2.length!==0) return this.stack2.pop();

        while(this.stack.length!=0){
            this.stack2.push(this.stack.pop());
        } 

        return this.stack2.pop();
    }

    peek(): number {
        if(this.stack.length === 0 && this.stack2.length === 0) return -1; 

      if(this.stack2.length!=0) return this.stack2[this.stack2.length-1];

      while(this.stack.length!=0){
        this.stack2.push(this.stack.pop());
      }

      return this.stack2[this.stack2.length-1];
    }

    empty(): boolean {
        return this.stack.length === 0 && this.stack2.length == 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */