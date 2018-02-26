class BinaryHeap {
    constructor (scoreFunction){
        this.heap = [];
        this.scoreFunction = scoreFunction;
    }

    size () {
      return this.heap.length;
    }

    push (element) {
        this.heap.push(element);
        this.bubbleUp(this.heap.length - 1);
        return (this)
    }

    pop () {
        const result = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
          this.heap[0] = end;
          this.sinkDown(0);
        }
        return result;
      }

      remove (node) {
        const length = this.heap.length;    

        for (var i = 0; i < length; i++) {
          if (this.heap[i] !== node) {
            continue; 
          }

          const end = this.heap.pop();

          if (i == length - 1) {
            break;
          }

          this.heap[i] = end;
          this.bubbleUp(i);
          this.sinkDown(i);
          break;
        }
    }

    

    bubbleUp (n) {
        const element = this.heap[n];
        const score = this.scoreFunction(element);

        while (n > 0) {
            let parentN = Math.floor((n + 1) / 2) - 1;
            let parent = this.heap[parentN];
 
          if (score >= this.scoreFunction(parent)){
            break;
          }

          this.heap[parentN] = element;
          this.heap[n] = parent;
          n = parentN;
        }
      }

      sinkDown (n) {
        var length = this.heap.length,
        element = this.heap[n],
        elemScore = this.scoreFunction(element);
    
        while(true) {
          var child2N = (n + 1) * 2, child1N = child2N - 1;
          var swap = null;
          if (child1N < length) {
            var child1 = this.heap[child1N],
            child1Score = this.scoreFunction(child1);
            if (child1Score < elemScore)
              swap = child1N;
          }
          if (child2N < length) {
            var child2 = this.heap[child2N],
            child2Score = this.scoreFunction(child2);
            if (child2Score < (swap == null ? elemScore : child1Score))
              swap = child2N;
          }
    
          if (swap == null) {
              break;
          }
    
          this.heap[n] = this.heap[swap];
          this.heap[swap] = element;
          n = swap;
        }
    }
}

module.exports = BinaryHeap