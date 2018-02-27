class QuickSort{
    constructor(array){
        this.array = (array) ? array : [];
        this.left = 0;
        this.right = array.length -1;// the last element in the array
    }

    sort(){
        return this._resursiveSort(this.array, this.left, this.right);
    }

    _resursiveSort(array, left, right){ //pass the same array, but keep tweeking pieces
        // keep splitting as long as the sides do not pass
        if(left < right){
            const pivot = right;
            const partitionIndex = this._partition(array, pivot, left, right);

            //split and sort left then right sides, keep passing the entire array
            this._resursiveSort(array, left, partitionIndex - 1);
            this._resursiveSort(array, partitionIndex + 1, right);
        }

        return array;
    }

    _partition(array, pivot, left, right){
        const pivotValue = array[pivot];
        let partitionIndex = left;
        
        //itterate through just a piece of the array
        for(var i = left; i < right; i++){
            //for each item going up, look for smaller item, then swap
            if(array[i] < pivotValue){
                this._swap(array, i, partitionIndex);
                partitionIndex++;
            }
        }
        this._swap(array, right, partitionIndex);
        return partitionIndex;
    }

    _swap(array, i, j){
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

}

module.exports = QuickSort;